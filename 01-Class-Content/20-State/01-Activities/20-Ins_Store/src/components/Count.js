import React, { useEffect } from "react";
import { useCountContext } from "../utils/GlobalState";

function Count() {
  const [state, dispatch] = useCountContext();

  useEffect( () => {
    // get the location...
    dispatch({type: "saveLocation", lat: 90, lon:141})
  })

  return (
    <div className="App">
      <button className="btn btn-success mt-5 mb-5" onClick={() => dispatch({ type: "add" })}>
        Add
      </button>
      <div>{state.count}</div>
      <button className="btn btn-danger mt-5" onClick={() => dispatch({ type: "subtract" })}>
        Subtract
      </button>
    </div>
  );
}

export default Count;
