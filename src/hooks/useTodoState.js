import { useState } from "react";
import uuid from "uuid/v4";
export default initialTodos => {
  const [todos, setTodos] = useState(initialTodos);
  return {
    todos,
    addTodo: newTodoText => {
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
    },
    removeTodo: todoId => {
      const updatedTodos = todos.filter(todo => todo.id !== todoId);
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updateTodos = todos.map(todo =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updateTodos);
    },
    toggleTodo: todoId => {
      const updatedTodos = todos.map(todo => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      setTodos(updatedTodos);
    }
  };
};
