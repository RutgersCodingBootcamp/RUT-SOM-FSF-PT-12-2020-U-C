// import
import React from "react";

import { useToDoContext } from "../utils/ToDoState";

// name 
function List(props) {
  const [items, dispatch] = useToDoContext();
  // render return
  return (
    <>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            {item.name}{" "}
            <button
              className="btn btn-danger ml-5"
              onClick={() => dispatch({ type: "remove", index })}
            >
              X Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
// export
export default List;