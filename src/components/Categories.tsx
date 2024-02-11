import React, { useEffect, useState } from "react";
import { FlexCardsContainer, FlexRow } from "../styles/Style";
import all from "../assets/all.png";
import work from "../assets/work.png";
import hobbies from "../assets/hobbies.png";
import selfcare from "../assets/selfcare.png";
import other from "../assets/other.png";
import { Task, utilityGetTasksFromLS } from "../utilities/utilities";

function Categories() {
  const [category, setCategory] = useState("all");
  const taskList = utilityGetTasksFromLS();
  const [tasks, setTasks] = useState<Task[]>([]);

  const iconStyle: any = {
    width: "90px",
  };

  useEffect(() => {
    const fetchedTasks = utilityGetTasksFromLS().filter(
      (task: any) => task.category === category || category === "all"
    );
    setTasks(fetchedTasks);
  }, [category]);

  const cardStyle = {
    margin: "20px",
  };

  return (
    <>
      <div>
        <h2>Tasks by Category</h2>
      </div>
      <FlexRow>
        <img style={iconStyle} onClick={() => setCategory("all")} src={all} />
        <img
          style={iconStyle}
          onClick={() => {
            setCategory("work");
            console.log("work");
          }}
          src={work}
        />
        <img
          style={iconStyle}
          onClick={() => setCategory("hobbies")}
          src={hobbies}
        />
        <img
          style={iconStyle}
          onClick={() => setCategory("selfcare")}
          src={selfcare}
        />
        <img
          style={iconStyle}
          onClick={() => setCategory("other")}
          src={other}
        />
      </FlexRow>

      {category == "all" ? (
        <FlexCardsContainer>
          {" "}
          {taskList.map((task: any, index: number) => (
            <div key={index} className="card w-09" style={cardStyle}>
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <p className="card-text">
                  Date added: <br />
                  {task.dateAdded}
                </p>
                {task.completed === false ? (
                  <div>Not completed yet</div>
                ) : (
                  <div>
                    Completed!
                    <br /> Date Completed: {task.dateCompleted}
                  </div>
                )}
                <a href="#" className="btn btn-primary">
                  Button
                </a>
              </div>
            </div>
          ))}
        </FlexCardsContainer>
      ) : (
        <FlexCardsContainer>
          {taskList.map((task: any, index: number) =>
            task.category === category ? (
              <div key={index} className="card w-09" style={cardStyle}>
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">
                    Date added: <br />
                    {task.dateAdded}
                  </p>
                  {task.completed === false ? (
                    <div>Not completed yet</div>
                  ) : (
                    <div>
                      Completed!
                      <br /> Date Completed: {task.dateCompleted}
                    </div>
                  )}
                  <a href="#" className="btn btn-primary">
                    Button
                  </a>
                </div>
              </div>
            ) : null
          )}
        </FlexCardsContainer>
      )}
    </>
  );
}

export default Categories;
