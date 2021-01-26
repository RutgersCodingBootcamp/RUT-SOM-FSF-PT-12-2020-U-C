console.log("My animal list will be created here.");
// get data from local storage
var animalList = localStorage.getItem("animal-list");
// if we can't find it
if(animalList === null){
    // start as an empty list
    animalList = [];
}
else{
    animalList = JSON.parse(animalList);
}

var button = document.querySelector("#add-animal-to-list");
button.addEventListener("click", function(event){
    console.log(event.target);
    var input = document.querySelector("#add-animal-to-list-text");
    console.log(input.value);

    // we add the item to the list and save to local storage
    animalList.push(input.value);
    localStorage.setItem("animal-list", JSON.stringify(animalList));

    renderList();
});

function renderList(){
    var animalListTag = document.querySelector("ul");
    // create our list if it doesn't exist
    if(animalListTag === null){
        console.log("our list doesn't exist yet");
        animalListTag = document.createElement("ul");
        document.body.append(animalListTag);
    }

    var innerList = "";
    for(var i = 0; i < animalList.length; i++){
        innerList += `<li>${animalList[i]}</li>`;
    }
    animalListTag.innerHTML = innerList;
}

renderList();