import React, { useEffect } from "react";
import useTodoState from "../hooks/useTodoState.js";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import TodoList from "../components/TodoList.js";
import TodoForm from "../components/TodoForm.js";
import { TodosProvider } from "../contexts/Todos.Context.js";

const TodoApp = props => {
  //const initialTodos = [
  //{ id: 1, task: "Clean Fishtank", completed: false },
  //{ id: 2, task: "Wash Car", completed: true },
  //{ id: 3, task: "Grow Beard", completed: false }
  //];

  //useEffect(() => {
  //window.localStorage.setItem("todos", JSON.stringify(todos));
  //}, [todos]);

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa"
      }}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
