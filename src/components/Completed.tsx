import React from "react";
import {
  Task,
  utilityGetCompletedTasksFromLS,
  utilityGetTasksFromLS,
} from "../utilities/utilities";
import { Wrapper } from "../styles/Style";

function Completed() {
  const tasks: Task[] = utilityGetCompletedTasksFromLS();

  return (
    <>
      <Wrapper>
        <ul>
          {tasks.map((task: any, index: number) => (
            <>
              <li key={index}><strong>{task.title}</strong></li>
              <div>date added: {task.dateAdded}</div>
              <div>date of completion: {task.dateCompleted}</div>
            </>
          ))}
        </ul>
      </Wrapper>
    </>
  );
}

export default Completed;
