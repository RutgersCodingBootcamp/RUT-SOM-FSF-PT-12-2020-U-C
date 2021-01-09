var listEl = document.querySelector("#grocery-list");
var shoppingCartEl = document.querySelector("#shopping-cart");
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

var cuteList = document.querySelector("#cat-list");

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  // delegation here to the button
  if(event.target.matches("button")) {
    var item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});

cuteList.addEventListener("click", function(event){
  event.preventDefault();
  // delegation here to the button
  if(event.target.matches("button")) {
    alert("cat" + event.target.parentElement.id + " is cute.")
  }
});