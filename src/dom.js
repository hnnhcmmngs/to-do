import projects from "./projects";

const domHandler = (function() {
    const tasks = document.querySelector("#tasks");
    const projectsdisplay = document.querySelector("#projects");
    const newtask = document.querySelector("#newtask");

    const addNewTask = (task) => {
        const newTask = document.createElement("div");
        newTask.style.border = "1px solid black";

        const title = document.createElement("div");
        title.textContent = task.title;
        newTask.appendChild(title);

        const description = document.createElement("div");
        description.textContent = task.description;
        newTask.appendChild(description);

        const dueDate = document.createElement("div");
        dueDate.textContent = task.dueDate;
        newTask.appendChild(dueDate);

        const priority = document.createElement("div");
        priority.textContent = task.priority;
        newTask.appendChild(priority);

        const project = document.createElement("div");
        project.textContent = task.project;
        newTask.appendChild(project);

        tasks.appendChild(newTask);
    }

    const addNewProject = (name) => {
        const newProject = document.createElement("div");
        newProject.textContent = name;

        newProject.addEventListener("click", () => {
            newtask.style.visibility = "visible";
            projects.setCurrentProject(newProject.textContent);
        });

        projectsdisplay.appendChild(newProject);
    }

    const showAllProjects = () => {
        newtask.style.visibility = "hidden";
    }

    return {
        addNewTask,
        addNewProject,
        showAllProjects
    }
})();

export default domHandler;