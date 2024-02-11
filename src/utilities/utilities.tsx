export interface Task {
  id: string;
  title: string;
  completed: boolean;
  dateAdded: string;
  dateCompleted: string;
  category ?: string; 
}

export const utilityGetTasksFromLS = () => {
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  return tasks;
};

export const utilityRemoveTaskFromLS = (id: string) => {
  const prevTasks: Task[] = utilityGetTasksFromLS();
  const taskIndex = prevTasks.findIndex((task) => task.id == id);
  if (taskIndex != -1) {
    prevTasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(prevTasks));
  }
};

export const toggleTaskComplete = (id: string) => {
  const prevTasks: Task[] = utilityGetTasksFromLS();
  const task = prevTasks.find((task) => task.id == id);
  const taskIndex = prevTasks.findIndex((task) => task.id == id);
  if (task != null) {
    prevTasks[taskIndex].completed = true;
    prevTasks[taskIndex].dateCompleted = new Date().toLocaleString();
    prevTasks[taskIndex] = task;    
  }

  localStorage.setItem("tasks" , JSON.stringify(prevTasks));
  
  const completed: Task[] = JSON.parse(
    localStorage.getItem("completed") || "[]"
  );

  const alreadyExists = completed.find((task) => task.id == id);

  if (!alreadyExists) {
    const completedTasks = [...completed, task];
    localStorage.setItem("completed", JSON.stringify(completedTasks));
  } else {
    console.log("already in the completed list...");
  }
};

export const utilityGetCompletedTasksFromLS = () => {
  const completedTasks: Task[] = JSON.parse(
    localStorage.getItem("completed") || "[]"
  );
  return completedTasks;
};
