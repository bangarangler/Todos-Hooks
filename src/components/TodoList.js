import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
//import ListItem from "@material-ui/core/ListItem";
//import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo.js";

const TodoList = props => {
  if (props.todos.length)
    return (
      <Paper>
        <List>
          {props.todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo
                task={todo.task}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
                id={todo.id}
                completed={todo.completed}
              />
              {i < props.todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default TodoList;
