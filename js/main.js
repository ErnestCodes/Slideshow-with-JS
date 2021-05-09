let i = 0;
let images = [];
let time = 5000;

// image list
images[0] = "img/image1.jpg";
images[1] = "img/image2.jpg";
images[2] = "img/image3.jpg";
images[3] = "img/image4.jpg";

// change the image
function changeImg() {
  document.slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
