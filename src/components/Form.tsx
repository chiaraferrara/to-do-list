import React, { useContext, useRef, useState } from "react";
import { Task } from "../utilities/utilities";
import { AddTaskInput, Button, FormWrapper } from "../styles/Style";
import { MyContext } from "./HomePage";

function Form() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const {setUpload} : any = useContext(MyContext)
 

  const categoryValue = useRef<HTMLSelectElement>(null);

  const saveTaskOnLocalStorage = () => {
    const tasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "[]");
    

    const newTask: Task = {
      id: title + new Date().toLocaleDateString(),
      title: title,
      completed: false,
      dateAdded: new Date().toLocaleDateString(),
      dateCompleted: new Date().toLocaleDateString(),
      category : categoryValue.current?.value 
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
    setUpload(true)
  }}>
    <AddTaskInput type="text" 
    placeholder="Title of your task"
    required
    value={title}
    onChange={(event) => setTitle(event.target.value)}>
    </AddTaskInput>
    <select  ref={categoryValue} id="categorySelect">
        <option value="all">Select category</option>
        <option value="work">Work</option>
        <option value="hobbies">Hobbies</option>
        <option value="selfcare">Selfcare</option>
        <option value="other">Other</option>
    </select>
    <Button type="submit">+</Button>

  </form>
  </FormWrapper>
  </>
  )
}

export default Form;
