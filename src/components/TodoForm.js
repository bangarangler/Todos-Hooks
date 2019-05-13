import React, { useContext } from "react";
import useInputState from "../hooks/useInputState.js";
import { TodosContext } from "../contexts/Todos.Context.js";

import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const TodoForm = props => {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);
  console.log("TODO FORM RENDER!!!");
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
