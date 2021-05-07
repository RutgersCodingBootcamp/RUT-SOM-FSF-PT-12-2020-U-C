import React, { createContext, useReducer, useContext } from "react";

const ToDoContext = createContext();
const { Provider } = ToDoContext;

const reducer = (state, action) => {
	switch (action.type) {
		case "add":
			return [
				...state,
				{
					id: state.length * Math.random(),
					name: action.name
				}
			];
		// Bonus: Remove a todo from the list.
		case "remove":
			return state.filter((_, index) => {
				return index !== action.index;
			});
		default:
			return state;
	}
};

const ToDoProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, value);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useToDoContext = () => {
  return useContext(ToDoContext);
};

export { ToDoProvider, useToDoContext };
