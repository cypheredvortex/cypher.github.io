function upDate(previewPic){
    const x=document.getElementById("image");
    x.style.backgroundImage=`url("${previewPic.src}")`;
    x.innerHTML=previewPic.alt;
  }
  function unDo(previewPic){
  const x=document.getElementById("image");
  x.style.backgroundImage=null;
  x.innerHTML="Hover over an image below to display here.";
  }
  function focus(previewPic){
    console.log("Focus event triggered for image: " + previewPic.alt);
    previewPic.style.border="3px solid blue";
  }
  function blur(previewPic){
    console.log("Blur event triggered for image: " + previewPic.alt);
    previewPic.style.border="";
  }
  window.onload = function() {
    console.log("Page has loaded!");
    addTabIndexToImages();
  };
  
  function addTabIndexToImages() {
    const images = document.querySelectorAll(".preview");
    images.forEach((image) => {
      image.setAttribute("tabindex", "0");
    });
  }
  