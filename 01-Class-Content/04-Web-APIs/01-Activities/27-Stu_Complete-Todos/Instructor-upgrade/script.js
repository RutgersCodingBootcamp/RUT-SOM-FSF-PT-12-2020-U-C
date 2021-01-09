var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

// default
var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
// if we have a value, retrieve it
if(localStorage.getItem("todos") !== null){
  todos = JSON.parse(localStorage.getItem("todos"));
}

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
  if(event.target.matches("button")){
    event.preventDefault();
    console.log(event.target);
    // grab button
    var button = event.target;
    // get index
    var index = parseInt(button.getAttribute("data-index"));

    // remove the element at index and exactly 1 element
    todos.splice(index, 1);

    // right after a change, save it
    console.log("terst");
    localStorage.setItem("todos", JSON.stringify(todos));

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

  // right after a change, save it
  localStorage.setItem("todos", JSON.stringify(todos));


  // Re-render the list
  renderTodos();
});
