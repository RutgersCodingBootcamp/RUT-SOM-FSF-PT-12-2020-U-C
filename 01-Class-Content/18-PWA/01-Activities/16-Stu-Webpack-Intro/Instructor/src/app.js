const calculations = require("./calculations.js");
console.log(calculations);
const priceEl = document.getElementById("price");
const balanceEl = document.getElementById("balance");
const expenseEl = document.getElementById("expense");
const expensesListEl = document.getElementById("expenses-list");
const submitBtn = document.getElementById("submit");
const resetBtn = document.getElementById("reset");

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
  calculations.subtractFromBudget(price);
}

function submit(e) {
  e.preventDefault();
  addToList(expenseEl.value, priceEl.value);
}

function reset(e) {
  e.preventDefault();
  calculations.resetBudget();
  // console.log("got here");
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;

console.log("Will it compile");
