let socket = null;

function connectWebSocket() {
  socket = new WebSocket('ws://localhost:8080');

  socket.onopen = function() {
    console.log('WebSocket connection established');
  };

  socket.onmessage = function(event) {
    if (event.data === 'reload') {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (tabs[0]) {
          // Add a small delay before reloading
          setTimeout(() => {
            // Force a cache-clearing reload
            chrome.tabs.reload(tabs[0].id, { bypassCache: true }, () => {
              console.log('Page reloaded with cache cleared');
              // If needed, you can send a message to the content script here
              chrome.tabs.sendMessage(tabs[0].id, { action: "contentUpdated" });
            });
          }, 500); // 500ms delay, adjust as needed
        }
      });
    }
  };

  socket.onerror = function(event) {
    console.error('WebSocket error:', event);
    if (event.target.readyState === WebSocket.CLOSED) {
      console.error('WebSocket is closed. Attempting to reconnect...');
      setTimeout(connectWebSocket, 5000); // Try to reconnect after 5 seconds
    }
  };

  socket.onclose = function(event) {
    console.log('WebSocket connection closed:', event);
    setTimeout(connectWebSocket, 5000); // Try to reconnect after 5 seconds
  };
}

// Initial WebSocket connection
connectWebSocket();
