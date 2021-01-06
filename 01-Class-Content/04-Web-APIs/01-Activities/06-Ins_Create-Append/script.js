var tagName = prompt("Please enter an HTML Tag (ex. h1, h2, p, div):", "enter tag");
// console.log(tagName);

if (tagName !== "h1" && tagName !== "h2" && tagName !== "p" && tagName !== "div") {
  alert("please enter a valid tag");
} else {
  console.log(tagName);
  // creating our tag
  var tag = document.createElement(tagName);
  // adding our text
  tag.textContent = "This was made via prompts. It's a " + tagName;
  // tag.textContent = "Peter saved the world!"
  // appending to the DOM (giving our child a parent)
  document.body.appendChild(tag);
}

var nextTag = confirm("Would you like to add another tag?");
if (nextTag === true) {
  var secondTagName = prompt("Please enter another  HTML Tag (ex. h1, h2, p, div):", "enter tag here");
  if(secondTagName !== "h1" && secondTagName !== "h2" && secondTagName !== "p" && secondTagName !== "div") {
    alert("please enter a valid tag");
  } else {
    var secondTag = document.createElement(secondTagName);
    secondTag.textContent = "This is our second tag via prompts, it's a " + secondTagName;
    document.body.appendChild(secondTag);
  }
}