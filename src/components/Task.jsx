import { useState } from "react";
import s from "../css/Task.module.css";

const getRandomHEX = () => {
  let res = ["#"];
  for (let i = 0; i < 6; i++) {
    res.push(Math.round(Math.random() * 16).toString(16));
  }
  return res.join("");
};

const Task = (props) => {
  const [bg, setBg] = useState(getRandomHEX());

  const info = props.info;

  const deleteEl = (e) => {
    console.log("button clicked on el:", info.id);
    e.preventDefault();
    props.action("deleteObj", info);
  };

  return (
    <div className={s.task} style={{ backgroundColor: bg }}>
      <span>{"id:" + info.id + " " + info.title}</span>

      <p>{info.desc}</p>
      <button onClick={deleteEl}>delete</button>
    </div>
  );
};

export default Task;
