import React, { useEffect, useState } from "react";
import { CategoryLabel, FlexCardsContainer, FlexRow } from "../styles/Style";
import { Task, utilityGetTasksFromLS } from "../utilities/utilities";
import "../App.css"

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

        <CategoryLabel className="categoryLabel" onClick={() => setCategory("all")}>all</CategoryLabel>

        <CategoryLabel className="categoryLabel" onClick={() => setCategory("work")}>work</CategoryLabel>
        <CategoryLabel className="categoryLabel" onClick={() => setCategory("hobbies")}>hobbies</CategoryLabel>

        <CategoryLabel className="categoryLabel" onClick={() => setCategory("selfcare")}>selfcare</CategoryLabel>
        <CategoryLabel className="categoryLabel" onClick={() => setCategory("other")}>other</CategoryLabel>
      
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
