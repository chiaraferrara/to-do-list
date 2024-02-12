import React, { useEffect, useState, createContext, useContext } from "react";
import {
  Task,
  toggleTaskComplete,
  utilityGetTasksFromLS,
  utilityRemoveTaskFromLS,
} from "../utilities/utilities";
import { Button, FormWrapper, SingleTask, Wrapper } from "../styles/Style";
import doneIcon from "../assets/done.svg";
import { MyContext } from "./HomePage";
import deleteIcon from "../assets/delete.svg"

function Tasks() {
  const { upload }: any = useContext(MyContext);
  const { setUpload }: any = useContext(MyContext);
  const [tasks, setTasks] = useState<Task[]>([]);
  const taskList = utilityGetTasksFromLS();

  useEffect(() => {
    const tasks = utilityGetTasksFromLS();
    setTasks(tasks);
  }, [upload]);

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
                <div>
                  <SingleTask isCompleted={task.completed}>
                    <strong>{task.title}</strong>{" "}
                    <Button
                      onClick={() => {
                        toggleTaskComplete(task.id);
                        setUpload(!upload);
                      }}
                    >
                      <img src={doneIcon} alt="check" />
                      <Button
                        onClick={() => {
                          utilityRemoveTaskFromLS(task.id);
                          setUpload(!upload);
                        }}
                      >
                       <img src={deleteIcon}/>
                      </Button>
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
