// need to grab the two buttons and put in vars
var decButton = document.querySelector("#decrement");
var incButton = document.querySelector("#increment");

// start count at 0
var count = 0;

// need to grab the tag that will show count
var countTag = document.querySelector("#count");

// add event listener for the clicks on the decrement button
decButton.addEventListener("click", function(event){
    // show what i clicked
    console.log(event.target);

    // if count is 0... do nothing... no code required

    // if count is greater than 0 decrement
    if(count > 0){
        // decrements
        count--;

        // put count on the page
        countTag.textContent = count;
    }
});


// add event listener for the clicks on the increment button
incButton.addEventListener("click", function(event){
    // show what i clicked
    console.log(event.target);

    // increments
    count++;

    // put count on the page
    countTag.textContent = count;
});
