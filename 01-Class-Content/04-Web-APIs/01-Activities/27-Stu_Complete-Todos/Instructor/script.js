var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    var button = document.createElement("button");
    button.textContent = "Complete";
    button.setAttribute("data-index", i);
    li.textContent = todo;
    li.appendChild(button);
    todoList.appendChild(li);
  }
}
todoList.addEventListener("click", function(event){
  // delegation if the element isn't immediately on the page
  if(event.target.matches("button")){
    event.preventDefault();
    console.log(event.target);
    // grab button
    var button = event.target;
    // get index
    var index = parseInt(button.getAttribute("data-index"));

    // remove the element at index and exactly 1 element
    todos.splice(index, 1);

    renderTodos();
  }
});

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});
