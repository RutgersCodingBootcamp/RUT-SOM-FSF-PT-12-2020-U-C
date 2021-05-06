import React, { useReducer, useRef } from "react";
import "./App.css";

function Count() {
  const inputRef = useRef();

  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
    case "add":
      return state + 1;
    case "subtract":
      return state - 1;
    case "change":
      // convert the value from the input into an integer
      // copy
      // const newCount = parseInt(inputRef.current.value); // not preferred
      const newCount = action.value; // preferred because you are using only the inputs for this reducer

      // process 
      // only update the count if the value is numeric
      if (isNaN(newCount)) {
        return state
      }
      // set state
      return newCount;
    default:
      return state;
    }
  }, 0);

  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch({type: "add"})}>
        Add
      </button>
      <div>{count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch({type: "subtract"})}>
        Subtract
      </button>
      <input
        className="form-control w-25 mx-auto mt-5"
        placeholder="Type new value..."
        ref={inputRef}
      />
      <button className="btn btn-warning mt-5" onClick={() => dispatch({ type: "change", value: parseInt(inputRef.current.value)} )}>
        Change
      </button>
    </div>
  );
}

export default Count;
