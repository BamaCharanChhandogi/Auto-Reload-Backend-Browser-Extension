let socket = null;
let isConnected = false;
let connectionTimeout = null;

function connectWebSocket() {
  if (socket) {
    socket.close();
  }

  return new Promise((resolve, reject) => {
    socket = new WebSocket("ws://localhost:8080");

    connectionTimeout = setTimeout(() => {
      if (!isConnected) {
        reject(
          new Error(
            "Connection timeout. Make sure the VS Code extension is running."
          )
        );
      }
    }, 5000); // 5 seconds timeout

    socket.onopen = function () {
      console.log("WebSocket connection established");
      isConnected = true;
      clearTimeout(connectionTimeout);
      resolve();
    };

    socket.onmessage = function (event) {
      if (event.data === "reload") {
        chrome.tabs.query(
          { active: true, currentWindow: true },
          function (tabs) {
            if (tabs[0]) {
              setTimeout(() => {
                chrome.tabs.reload(tabs[0].id, { bypassCache: true }, () => {
                  console.log("Page reloaded with cache cleared");
                  chrome.tabs.sendMessage(tabs[0].id, {
                    action: "contentUpdated",
                  });
                });
              }, 500);
            }
          }
        );
      }
    };

    socket.onerror = function (event) {
      console.error("WebSocket error:", event);
      isConnected = false;
      clearTimeout(connectionTimeout);
      reject(new Error("Failed to connect to WebSocket server."));
    };

    socket.onclose = function (event) {
      console.log("WebSocket connection closed:", event);
      isConnected = false;
      clearTimeout(connectionTimeout);
      reject(new Error("WebSocket connection closed."));
    };
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "start") {
    connectWebSocket()
      .then(() => sendResponse({ success: true }))
      .catch((error) => sendResponse({ error: error.message }));
    return true; // Indicates that the response is sent asynchronously
  } else if (message.action === "stop") {
    if (socket) {
      socket.close();
      socket = null;
    }
    isConnected = false;
    sendResponse({ success: true });
  } else if (message.action === "getStatus") {
    sendResponse({ isConnected: isConnected });
  }
  return true; // Indicates that the response is sent asynchronously
});
