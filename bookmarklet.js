(function () {
  const text = window.getSelection().toString();
  const result = `#saved ${
    text ? `#quote __${text}__ - via` : "#link"
  } [${document.title}](${location.href})`;

  chrome.runtime.sendMessage(null, {
    type: "save",
    text: result,
  });
})();
