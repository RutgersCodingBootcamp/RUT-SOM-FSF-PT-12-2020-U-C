const listItems = document.querySelectorAll("ul > li");

for (const li of listItems) {
  console.log(li);
  li.classList.add("red");
}
