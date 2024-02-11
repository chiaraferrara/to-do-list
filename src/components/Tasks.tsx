import React, { useEffect, useState, createContext, useContext } from "react";
import {
  Task,
  toggleTaskComplete,
  utilityGetTasksFromLS,
  utilityRemoveTaskFromLS,
} from "../utilities/utilities";
import { Button, FormWrapper, SingleTask, Wrapper } from "../styles/Style";
import doneIcon from "../assets/done.svg";

function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskList = utilityGetTasksFromLS();


  useEffect(() => {
    const tasks = utilityGetTasksFromLS();
    setTasks(tasks);
  }, [utilityGetTasksFromLS()]);

  const tasksList = utilityGetTasksFromLS();

  return (
    <>
      {taskList.length === 0 ? (
        <Wrapper>
          <p> No task available</p>
        </Wrapper>
      ) : (
        <Wrapper>
          <ul>
            {tasksList.map((task: any, index: number) => (
              <li key={index}>
                <div >
                  <SingleTask isCompleted={task.completed === true}>
                    <strong
                      onClick={() => {
                        utilityRemoveTaskFromLS(task.id);
                      }}
                    >
                      {task.title}
                    </strong>{" "}
                    <Button onClick={() => toggleTaskComplete(task.id)}>
                      <img src={doneIcon} alt="check" />
                    </Button>
                  </SingleTask>
                </div>
              </li>
            ))}
          </ul>
        </Wrapper>
      )}
    </>
  );
}

export default Tasks;
