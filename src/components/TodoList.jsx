import React from "react";
import Task from "./Task";
import s from "../css/TodoList.module.css";

const TodoList = (props) => {
  return props.list.map((el) => {
    return <Task info={el} action={props.action} key={el.id} />;
  });
};

export default TodoList;
