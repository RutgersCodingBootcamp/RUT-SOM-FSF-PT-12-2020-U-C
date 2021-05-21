var carousel = document.querySelector(".carouselbox");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var displayImageEL = document.querySelector(".displayImage");

//initialize a index counter to track the photos
var index = 0;
var images = [
  "https://picsum.photos/300/200", //0
  "https://picsum.photos/300/201", //1
  "https://picsum.photos/300/202", //2
  "https://picsum.photos/300/203", //3
];

carousel.style.backgroundImage = "url('" + images[0] + "')";

carousel.addEventListener("click", function () {
  console.log("clicked carousel");
//   window.location.href = images[index];
  displayImageEL.style.backgroundImage = "url('" + images[index] + "')";
});

next.addEventListener("click", function (event) {
  console.log("next clicked");
  event.stopPropagation();
  index++;
  console.log(index);
  if (index < images.length) {
    carousel.style.backgroundImage = "url('" + images[index] + "')";
  }
});

prev.addEventListener("click", function (event) {
  console.log("prev clicked");
  event.stopPropagation();
  index--;
  console.log(index);
  if (index > 0 && index < images.length) {
    carousel.style.backgroundImage = "url('" + images[index] + "')";
  }
});
