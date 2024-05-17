import domHandler from "./dom";
import projects from "./projects";

const toDos = (function() {
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
        projects.addTaskToProject(project, newTask);
        domHandler.addNewTask(newTask);
    }

    return {
        addTask
    }
})();

export default toDos;