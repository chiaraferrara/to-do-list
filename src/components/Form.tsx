import React, { useState } from "react";
import { Task } from "../utilities/utilities";
import { Button, FormWrapper } from "../styles/Style";

function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const saveTaskOnLocalStorage = () => {
    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    const newTask: Task = {
      id: title + new Date().toLocaleDateString(),
      title: title,
      completed: false,
      dateAdded: new Date().toLocaleDateString(),
      dateCompleted: new Date().toLocaleDateString(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return (
  <>
  <FormWrapper>
  <form 
  id="taskform"
  name="taskform"
  action="#"
  onSubmit={(e) =>{
    e.preventDefault()
    saveTaskOnLocalStorage()
    setTitle("")
  }}>
    <input type="text" 
    placeholder="Title of your task"
    value={title}
    onChange={(event) => setTitle(event.target.value)}>
    </input>
    <Button type="submit">+</Button>

  </form>
  </FormWrapper>
  </>
  )
}

export default Form;
