import React, { useRef } from "react";
import Form from "./components/Form";
import List from "./components/List";
import { ToDoProvider } from "./utils/ToDoState";
import "./App.css";

function TodoList() {
  // const [items, dispatch] = useReducer((state, action) => {
  //   switch (action.type) {
  //   case "add":
  //     return [
  //       ...state,
  //       {
  //         id: state.length * Math.random(),
  //         name: action.name
  //       }
  //     ];
  //     // Bonus: Remove a todo from the list.
  //   case "remove":
  //     return state.filter((_, index) => {
  //       return index !== action.index;
  //     });
  //   default:
  //     return state;
  //   }
  // }, []);

  

  return (
    <ToDoProvider>
      <div className="container text-center">
        <Form />
        
        <List />
        
      </div>
    </ToDoProvider>
  );
}

export default TodoList;
