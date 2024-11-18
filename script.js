function upDate(previewPic) {
  const display = document.getElementById("image");
  display.style.backgroundImage = `url("${previewPic.src}")`;
  display.innerHTML = previewPic.alt;
}

function unDo(previewPic) {
  const display = document.getElementById("image");
  display.style.backgroundImage = "none";
  display.innerHTML = "Hover over an image below to display here.";
}

function focus(previewPic) {
  console.log("Focus event triggered for image: " + previewPic.alt);
  previewPic.style.border = "3px solid blue";
}

function blur(previewPic) {
  console.log("Blur event triggered for image: " + previewPic.alt);
  previewPic.style.border = "";
}

function addTabIndexToImages() {
  const images = document.querySelectorAll(".preview");
  images.forEach((image, index) => {
      image.setAttribute("tabindex", "0");
      console.log(`TabIndex set for image ${index + 1}`);
  });
}

window.onload = function () {
  console.log("Page has loaded!");
  addTabIndexToImages();

  const images = document.querySelectorAll(".preview");
  images.forEach((image) => {
      image.addEventListener("mouseover", () => upDate(image));
      image.addEventListener("mouseout", () => unDo(image));
      image.addEventListener("focus", () => focus(image));
      image.addEventListener("blur", () => blur(image));
  });
};

  
