chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "contentUpdated") {
    console.log("Content update triggered");
    // For SPAs, you might need to trigger a route change or component re-render here
    // This is highly dependent on the specific framework/library you're using
    if (window.myAppUpdateFunction) {
      window.myAppUpdateFunction();
    }
  }
});

// You might also want to add this to force a hard reload if needed
window.addEventListener('load', () => {
  if (performance.navigation.type === 1) {
    console.log("This page is reloaded");
    // You could trigger any necessary update logic here
  }
});