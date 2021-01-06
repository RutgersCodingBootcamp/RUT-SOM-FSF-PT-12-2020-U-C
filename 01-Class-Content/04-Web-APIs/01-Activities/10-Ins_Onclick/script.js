var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");
var mode = "dark";

// wait for a click, then run function on every click
themeSwitcher.addEventListener("click", function() {
  console.log("whatever i feel like goes here");
  // conditional that uses mode for changing the look of the page
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});