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

    const deleteTask = (task) => {
        allTasksSorted = allTasksSorted.filter((todo) => !(todo.title === task.title && todo.project === task.project));
        localStorage.setItem("taskList", JSON.stringify(allTasksSorted));
        console.log(allTasksSorted);
    }

    const editTask = (task, newtitle, newdesc, newdate, newpriority) => {
        const oldtitle = task.title;
        const idx = allTasksSorted.findIndex(x => x.title === oldtitle && x.project === task.project);
        allTasksSorted[idx].title = newtitle;
        allTasksSorted[idx].description = newdesc;
        allTasksSorted[idx].dueDate = newdate;
        allTasksSorted[idx].priority = newpriority;
        projects.editTaskInProjet(task.project, oldtitle, newtitle, newdesc, newdate, newpriority);
        console.log(allTasksSorted[idx]);
        localStorage.setItem("taskList", JSON.stringify(allTasksSorted));
    }

    const deleteProject = (projectName) => {
        allTasksSorted = allTasksSorted.filter((todo) => !(todo.project === projectName));
        localStorage.setItem("taskList", JSON.stringify(allTasksSorted));
        console.log(allTasksSorted);
    }

    return {
        addTask,
        setTaskList,
        getTaskList,
        deleteTask,
        editTask,
        deleteProject
    }
})();

export default toDos;