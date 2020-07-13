(function () {
  const text = window.getSelection().toString();
  prompt(
    "Press CTRL+C or CMD+C, then escape and paste into Roam.",
    `#saved ${
      text ? `#quote __${text}__ - via` : "#link"
    } [${document.title}](${location.href})`,
  );
})();
