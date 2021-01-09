// grabbing the elements on the page for our inputs/outputs
var addBtn = document.querySelector("#add-btn");
var peopleListEl = document.querySelector("#people-list");
var nameEl = document.querySelector("#name");
var modalEl = document.querySelector("#modal-container");
var modalNameEl = document.querySelector("#modal-name");
var descriptionEl = document.querySelector("#description");
var closeEl = document.querySelector(".close");
var saveBtn = document.querySelector("#save");
// global variables that will hold data
var people = [{ name: "Bob" }]; // array of objects
var currentId = 0;

// add person
function addPersonToList(event) {
  // stop page refresh
  event.preventDefault();
  // get value from input field
  var name = nameEl.value;
  // create list element
  var li = document.createElement("li");
  // length of the array
  li.id = people.length; // li.setAttribute("id", people.length)
  // creates an edit button
  li.innerHTML = name + " <button>edit</button>";
  // putting the person in the list
  people.push({ name: name });
  // giving the child a parent
  peopleListEl.append(li);
}
//closing modal
function close() {
  // bootstrap to close the modal
  modalEl.style.display = "none";
}
// function for the event listener that will be created
function handleClick(event) {
  // Use event delegation to handle when the user clicks "edit"
  if (event.target.matches("button")) {
    // prevent refresh
    event.preventDefault();
    // showing the modal
    modalEl.style.display = "block";
    // gets the current id of the person
    currentId = parseInt(event.target.parentElement.id);
    // console.log(currentId);

    var name = people[currentId].name;
    var description = people[currentId].description;
    modalNameEl.textContent = name;
    if(description) {
      descriptionEl.value = description;
    } else {
      descriptionEl.value = "";
    }
  }
}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);

//delegation allows us to use the list which does exist
peopleListEl.addEventListener("click", handleClick);

// save button exists on page so we don't need delegation
saveBtn.addEventListener("click", function(event) {
  
  event.preventDefault();
  people[currentId].description = descriptionEl.value;
  close();
});

// won't work but the buttons don't exist yet
// var button = document.querySelector("button");
// button.addEventListener("click", handleClick);