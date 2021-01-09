console.log("Test me");
var images = [
    "http://placekitten.com/300/200",
    "http://placekitten.com/300/201",
    "http://placekitten.com/300/202",
    "http://placekitten.com/300/203",
    "http://placekitten.com/300/204",
    "http://placekitten.com/300/205",
    "http://placekitten.com/300/206",
    "http://placekitten.com/300/207",
    "http://placekitten.com/300/208",
    "http://placekitten.com/300/209",
    "http://placekitten.com/300/210"
];

// grab the two buttons
var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

// grab the carousel box (input/output)
var box = document.querySelector(".carouselbox");

// add an image
box.style.backgroundImage = "url(" + images[0] + ")";
box.setAttribute("data-image-num", 0);

// 1. When the `next` button is clicked, the image should change to the next image in the array. If the image has reached the end of the array, the image should start over at the start of the array.
next.addEventListener("click", function(event){
    // console.log(event.target);
    // stops the bubbling
    event.stopPropagation();

    // get the current image number
    var curr = parseInt(box.getAttribute("data-image-num"));
    // increment
    curr++;

    // for(var i = 0; i < images.length; i++){
    //     console.log(images[i]);
    // }
    // roll back to the first image
    if(curr >= images.length){
        curr = 0;
    }

    // add an image
    box.style.backgroundImage = "url(" + images[curr] + ")";
    box.setAttribute("data-image-num", curr);
    console.log(curr);
});
// 2. When the `previous` button is clicked, the image should change to the previous image in the array. If the image has reached the start of the array, the image should start over at the end of the array.
prev.addEventListener("click", function(event){
    // console.log(event.target);
    // stops the bubbling
    event.stopPropagation();

    // get the current image number
    var curr = parseInt(box.getAttribute("data-image-num"));
    // decrement
    curr--;

    // for(var i = 0; i < images.length; i++){
    //     console.log(images[i]);
    // }
    // roll back to the last image
    if(curr < 0){
        curr = images.length - 1;
    }

    // add an image
    box.style.backgroundImage = "url(" + images[curr] + ")";
    box.setAttribute("data-image-num", curr);
    console.log(curr);
});

// 3. When the user clicks on an image, they will be navigated to the url that hosts that image.
box.addEventListener("click", function(event){
    console.log(event.target);
    // change page
    window.location = images[parseInt(box.getAttribute("data-image-num"))];
});