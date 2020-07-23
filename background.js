chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, { file: "bookmarklet.js" });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message && message.type === "save") {
    const url = `https://roamresearch.com?title=${
      encodeURIComponent(message.text)
    }#/quick-capture`;

    chrome.windows.getCurrent((win) => {
      chrome.windows.create({
        type: "popup",
        url,
        focused: true,
        width: 400,
        height: 700,
        left: (screen.width / 2) - 200 + win.left,
        top: 100,
      });
    });
  }
});

chrome.contextMenus.create({
  title: "Save to Roam",
  id: "save",
  contexts: ["page", "frame", "selection"],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.executeScript(tab.id, { file: "bookmarklet.js" });
});
