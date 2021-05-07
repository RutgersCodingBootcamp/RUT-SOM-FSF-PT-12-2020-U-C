// import
import React, {useRef} from "react";
import { useToDoContext } from "../utils/ToDoState";
// name 
function Form(props) {
  const inputRef = useRef();
  const [items, dispatch] = useToDoContext();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value
    });
    inputRef.current.value = "";
  }
  // render return
  return (
    <>
      <h1>Create a Todo List!</h1>
      <form className="form-group mt-5" onSubmit={handleSubmit}>
        <input
          className="form-control"
          ref={inputRef}
          placeholder="Start typing what you need to do..."
        />
        <button className="btn btn-success mt-3 mb-5" type="submit">
          Add to List
        </button>
      </form>
    </>
  )
}
// export
export default Form;