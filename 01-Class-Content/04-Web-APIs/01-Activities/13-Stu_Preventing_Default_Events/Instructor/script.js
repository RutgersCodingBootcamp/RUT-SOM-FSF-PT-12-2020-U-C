// grab the button and put in a var
var subButton = document.querySelector("#submit");

// grab both input fields
var billInput = document.querySelector("#total-bill");
var tipInput = document.querySelector("#tip-percent");

// grab the output tags
var billOutput = document.querySelector("#new-total");
var tipOutput = document.querySelector("#tip-amount");

// add event listener for the button
// add an event listener that...
subButton.addEventListener("click", function(event){
    // prevent the page from doing the default action of refreshing
    event.preventDefault();

    // tells me what I clicked on
    console.log(event.target);
    
    // utilizes the values from the input fields that are floats (decimals)
    var bill = parseFloat(billInput.value);
    var tipPer = parseFloat(tipInput.value);

    // to calculate the recommended tip and 
    var recommendedTip = bill * (tipPer / 100);
    
    
    // the new total of the bill with tip included.
    var total = recommendedTip + bill;

    // show the new tip
    // tipOutput.textContent = "$" + recommendedTip.toFixed(2);
    tipOutput.textContent = convertToDollars(recommendedTip);
    // show the new bill total
    // billOutput.textContent = "$" + total.toFixed(2);
    billOutput.textContent = convertToDollars(total);
});

function convertToDollars(num){
    return "$" + num.toFixed(2);
}
