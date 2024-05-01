import domHandler from "./dom";

const toDos = (function() {
    const tasks = [];

    class ToDo {
        constructor(title, description, dueDate, priority) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
        }
    }

    const addTask = (title, description, dueDate, priority) => {
        const newTask = new ToDo(title, description, dueDate, priority);
        tasks.push(newTask);
        console.log(tasks);
        domHandler.addNewTask(newTask);
    }

    return {
        tasks,
        addTask
    }
})();

export default toDos;