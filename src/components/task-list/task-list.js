import React from "react";
import ReactDOM from "react-dom/client";

import "./task-list.css";
import Task from "../task/task";

function TodoList() {
  return (
    <ul className="todo-list">
      <Task />
    </ul>
  );
}

export default TodoList;
