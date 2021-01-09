// alert("I'm here");
var images = [
    "https://placekitten.com/300/200", // 0
    "https://placekitten.com/300/201", // 1
    "https://placekitten.com/300/202", // 2
    "https://placekitten.com/300/203" // 3
];

// input buttons
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

// input/output is the carousel box
var box = document.querySelector(".carouselbox");
box.style.backgroundImage = "url(" + images[0] + ")";
box.setAttribute("data-image-num", 0);

// 1. When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.
next.addEventListener("click", function(event){
    // console.log(event.target);
    event.stopPropagation();
    var curr = parseInt(box.getAttribute("data-image-num"));
    curr++;
    // for(var i = 0; i < images.length; i++){
    //     console.log(images[i]);
    // }
    if(curr >= images.length){
        curr = 0;
    }
    box.setAttribute("data-image-num", curr);
    box.style.backgroundImage = "url(" + images[curr] + ")";
    console.log(curr);
});
// 2. When the `previous` button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.
prev.addEventListener("click", function(event){
    // console.log(event.target);
    event.stopPropagation();
    var curr = parseInt(box.getAttribute("data-image-num"));
    curr--;
    // for(var i = 0; i < images.length; i++){
    //     console.log(images[i]);
    // }
    if(curr < 0){
        // last image
        curr = images.length - 1;
    }
    box.setAttribute("data-image-num", curr);
    box.style.backgroundImage = "url(" + images[curr] + ")";
    console.log(curr);
});

// 3. When the user clicks on an image, they will be navigated to the url that hosts that image.
box.addEventListener("click", function(event){
    console.log(event.target);
    // change the page to the selected image
    window.location = images[parseInt(box.getAttribute("data-image-num"))];
});