const listItems = document.querySelectorAll("li");
// console.log(listItems);
// document.querySelector("#songs").classList.add("red") - how we add a class
for(const li of listItems){
    li.classList.add("red");
    console.log(li);
}