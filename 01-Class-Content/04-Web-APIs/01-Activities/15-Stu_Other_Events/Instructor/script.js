var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");
var targetClick = document.querySelector("#target");
var keyOuput = document.querySelector("#key");
var keyCodeOutput = document.querySelector("#code");
var statusOutput = document.querySelector("#status");
var xOut = document.querySelector("#x");
var yOut = document.querySelector("#y");

function toggleDisplay(event) {
  window.debugVar = event;
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");


    // key output to page
    keyOuput.textContent = event.key;

    // keyCode output to page
    keyCodeOutput.textContent = event.keyCode;

    // type output to page
    statusOutput.textContent = event.type;

  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");

    targetClick.textContent = event.target.textContent;
    
    

    //pageX output to page
    xOut.textContent = event.pageX;
    //pageY output to page
    yOut.textContent = event.pageY;

  }
}

eventType.addEventListener("change", toggleDisplay);
mouseEventsEl.addEventListener("click", toggleDisplay);
eventType.addEventListener("keydown", toggleDisplay);