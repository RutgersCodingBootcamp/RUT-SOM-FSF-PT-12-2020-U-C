import React from "react";

const Card = props =>{
  return(
  <div className="Card_style">
      <h1> Second Name from the card component</h1>
      <h1> {props.passData}</h1>
    </div>
  );
}
export default Card;