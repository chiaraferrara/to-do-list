

export interface Task {
    id: string,
    title : string,
    completed : boolean,
    dateAdded: string,
    dateCompleted: string,
}

export const utilityGetTasksFromLS = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    return tasks
}


export const utilityRemoveTaskFromLS = (id : string) => {
    const prevTasks :  Task[] = utilityGetTasksFromLS();
    const taskIndex = prevTasks.findIndex(task => task.id == id );
    if (taskIndex != -1){
        prevTasks.splice(taskIndex,1);
        localStorage.setItem('tasks', JSON.stringify(prevTasks))
    }
}


export const toggleTaskComplete = (id : string) =>{
    const prevTasks : Task[] =utilityGetTasksFromLS();
    const task = prevTasks.find(task => task.id == id);
    const taskIndex = prevTasks.findIndex(task => task.id == id);
    if (task != null){
        prevTasks[taskIndex].completed = true;
        prevTasks[taskIndex] = task;

    }
}