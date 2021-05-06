import React, { useReducer, useRef } from "react";
import "./App.css";

const TodoList = () => {
  // Placeholder array
  // const items = [];
  // items is a state variable
  // dispatch is your action reducer
  const [items, dispatch] = useReducer( (state, action) => {
    switch(action.type){
      case "add": 
        // copy
        let itemsCopy = [...state];

        // process 
        itemsCopy.push(
          {
            id: itemsCopy.length + 1, 
            name: action.value
          }
        );

        // return sets the state -> setstate
        return itemsCopy;
      default:
        break;
    }

    return state; // return state to do nothing
  }, []);// default value

  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // console.log(inputRef.current.value);
    dispatch({
      type: "add",
      value: inputRef.current.value
    });
  }

  return (
    <div className="container text-center">
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input 
          className="form-control" 
          placeholder="Start typing what you need to do..." 
          ref={inputRef}
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
      <h4>My Todo List:</h4>
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item.id}>
            {item.name}{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
