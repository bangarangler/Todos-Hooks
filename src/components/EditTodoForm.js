import React, { useContext } from "react";
import useInputState from "../hooks/useInputState.js";
import TextField from "@material-ui/core/TextField";
import { TodosContext } from "../contexts/Todos.Context.js";

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const { dispatch } = useContext(TodosContext);
  const [value, handleChange, reset] = useInputState(task);
  console.log("EDIT TODO FORM RENDERING!!!!!!!");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        reset();
        toggleEditForm();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodoForm;
