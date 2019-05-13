import React, { createContext, useReducer } from "react";
import todoReducer from "../reducers/todo.reducer.js";
import useTodoState from "../hooks/useTodoState.js";

//TODOS
const defaultTodos = [
  {
    id: 1,
    task: "Mow the lawn",
    completed: true
  },
  {
    id: 2,
    task: "Get development job",
    completed: false
  }
];

export const TodosContext = createContext();

//ALL METHODS TO INTERACT W/ TODOS
export function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {props.children}
    </TodosContext.Provider>
  );
}
