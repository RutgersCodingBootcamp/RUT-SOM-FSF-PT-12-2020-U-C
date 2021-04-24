import React from "react";
import Item from "./Item";


function List(props) {
  return (
    <ul className="list-group">
      {props.groceries.map( thing => (
        <Item key={thing.id} {...thing} />
      ))}
      {/* <Item /> */}
    </ul>
  );
}

export default List;
