import domHandler from "./dom";
import projects from "./projects";

const toDos = (function() {
    let allTasksSorted = [];

    class ToDo {
        constructor(title, description, dueDate, priority, project) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.project = project;
        }
    }

    const addTask = (title, description, dueDate, priority, project) => {
        const newTask = new ToDo(title, description, dueDate, priority, project);
        allTasksSorted.push(newTask);
        allTasksSorted.sort(function(a, b) {
            return new Date(a.dueDate) - new Date(b.dueDate);
        });
        localStorage.setItem("taskList", JSON.stringify(allTasksSorted));
        console.log(allTasksSorted);
        projects.addTaskToProject(project, newTask);
        domHandler.addNewTask(newTask);
    }

    const setTaskList = (storage) => {
        allTasksSorted = storage;
    }

    const getTaskList = () => {
        return allTasksSorted;
    }

    return {
        addTask,
        setTaskList,
        getTaskList
    }
})();

export default toDos;