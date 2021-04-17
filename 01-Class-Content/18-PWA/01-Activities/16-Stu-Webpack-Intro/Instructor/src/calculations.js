console.log("duh");
const subtractFromBudget = function(price){
    console.log("subtract");
    var budget = parseFloat(document.querySelector("#balance").innerHTML);
    var priceNum = parseFloat(price);
    budget = budget - priceNum;
    document.querySelector("#balance").innerHTML = budget;
}
const resetBudget = function(){
    console.log("reset");
    var budget = parseFloat(document.querySelector("#budget").innerHTML);
    document.querySelector("#balance").innerHTML = budget;
    document.querySelector("#expenses-list").innerHTML = "";
}
module.exports = {
    subtractFromBudget,
    resetBudget
}