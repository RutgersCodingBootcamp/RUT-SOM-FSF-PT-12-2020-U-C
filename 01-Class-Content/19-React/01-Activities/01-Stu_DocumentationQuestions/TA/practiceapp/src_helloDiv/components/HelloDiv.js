import React from "react";
var myName = "George";
var myList = ["running","vacation"];

function HelloDiv() {
  return (
    <div>
      <h1>Hey guys! My Name is {myName}</h1>
      <h2>Things I like!</h2>
      <ul>
        {myList.map(item => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default HelloDiv;
