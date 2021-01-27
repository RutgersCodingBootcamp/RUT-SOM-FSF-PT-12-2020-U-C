console.log("ready to go");
var cars = {
    bunchesOfOtherData:{
        here: "stuff to ignore"
    },
    list: [
        { 
            name: "Civic",
            year: 1999,
            brand: "Honda",
            image: "https://file.kelleybluebookimages.com/kbb/base/house/1999/1999-Honda-Civic-RearSide_HOCIVHB991_505x374.jpg?interpolation=high-quality&downsize=303:*"
        },
        {
            name: "Peter",
            year: 1990,
            brand: "Hundai",
            image: "http://www.saab9000.com/gallery/villxoqe/images/saab%209000.jpg"
        }
    ]
};
var carList = cars.list;

function renderList(){
    var carListTag = document.querySelector("#car-list");
    // create our list if it doesn't exist
    if(carListTag === null){
        console.log("our list doesn't exist yet");
        carListTag = document.createElement("div");
        carListTag.id = "car-list"
        document.body.append(carListTag);
    }

    carListTag.innerHTML = carList.map(car => `
    <div style="display:inline-block">
        <ul>
            <li>Name: ${car.name}</li>
            <li>Year: ${car.year}</li>
            <li>Brand: ${car.brand}</li>
            <li><img src="${car.image}" alt="${car.name}" width=100 height:100 /></li>
        </ul>
    </div>`).join("");
}

renderList();