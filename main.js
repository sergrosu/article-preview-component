const shareWindow = document.getElementById("share-window")
const shareButton = document.getElementById("share-button");
const shareSVG = document.getElementById("share-svg");

shareButton.addEventListener("click", toggleShare);

function toggleShare() {
  shareWindow.classList.toggle("hidden");
  shareButton.classList.toggle("share-button-inverted");
  shareSVG.classList.toggle("svg-inverted");
  toggleHidden(shareWindow)
}

function toggleHidden(element) {
  const attr = element.attributes;

  if(attr['aria-hidden'].value == "true") {
    element.setAttribute("aria-hidden", "false");
  } else {
    element.setAttribute("aria-hidden", "true");
  }
}