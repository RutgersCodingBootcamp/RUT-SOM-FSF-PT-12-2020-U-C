// grab the button and put in a var
var subButton = document.querySelector("#submit");

// grab both input fields
var billInput = document.querySelector("#total-bill");
var tipInput = document.querySelector("#tip-percent");

// grab the output tags
var billOutput = document.querySelector("#new-total");
var tipOutput = document.querySelector("#tip-amount");

// grab the input for the number of people
var pplInput = document.querySelector("#num-people");

// grab the split button
var splitButton = document.querySelector("#split");

// grab the output for split
var splitOutput = document.querySelector("#total-per-person");

// add event listener for the button
// add an event listener that...
subButton.addEventListener("click", function(event){
    // prevent the page from doing the default action of refreshing
    event.preventDefault();

    // tells me what I clicked on
    console.log(event.target);
    
    // calculate tip
    var recommendedTip = calculateTip();

    // calculate new total
    var total = calculateTotal();

    // show the new tip
    // tipOutput.textContent = "$" + recommendedTip.toFixed(2);
    tipOutput.textContent = convertToDollars(recommendedTip);
    // show the new bill total
    // billOutput.textContent = "$" + total.toFixed(2);
    billOutput.textContent = convertToDollars(total);
});

// add event listener for the split button on clicks
splitButton.addEventListener("click", function(event){
    // prevent the page from doing the default action of refreshing
    event.preventDefault();

    // tells me what I clicked on
    console.log(event.target);

    // utilize the number of people and previous total to 
    var numPeople = parseInt(pplInput.value);
    var total = calculateTotal();

    // calculate the split bill
    var split = total / numPeople;

    // show the split
    splitOutput.textContent = convertToDollars(split);
});

function convertToDollars(num){
    return "$" + num.toFixed(2);
}

function calculateTip(){
    // utilizes the values from the input fields that are floats (decimals)
    var bill = parseFloat(billInput.value);
    var tipPer = parseFloat(tipInput.value);

    // to calculate the recommended tip and 
    return bill * (tipPer / 100);
}
function calculateTotal(){
    // utilizes the values from the input fields that are floats (decimals)
    var bill = parseFloat(billInput.value);

    // the new total of the bill with tip included.
    return calculateTip() + bill;
}