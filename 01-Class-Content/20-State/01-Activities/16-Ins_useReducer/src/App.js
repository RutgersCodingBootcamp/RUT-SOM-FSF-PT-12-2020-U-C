import React, { useReducer } from "react";
import "./App.css";

function App() {
  // reducers are naturally pure functions, you should be using only the inputs from the reducer to prevent side effects
  const [count, dispatch] = useReducer((state, action) => {
    if (action === "add") {
      return state + 1; // the return value is the new state (+1)
    } else if (action === "subtract") {
      return state - 1; // the return value is the new state (-1)
    } else {
      return state; // returning state means no change...
    }
  }, 0); // 0 is default state

  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch("add")}>
        Add
      </button>
      <div>{count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch("subtract")}>
        Subtract
       </button>
    </div>
  );
}

export default App;
