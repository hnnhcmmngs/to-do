import projects from "./projects";
import toDos from "./todo";

const domHandler = (function() {
    const tasks = document.querySelector("#tasks");
    const projectsdisplay = document.querySelector("#projects");
    const newtask = document.querySelector("#newtask");
    const expandmodal = document.querySelector("#expandtask");
    const expandtitle = document.querySelector("#expandtitle");
    const expanddesc = document.querySelector("#expanddesc");
    const expanddate = document.querySelector("#expanddate");
    const expandpriority = document.querySelector("#expandpriority");

    const createTaskDisplay = (task) => {
        const newTask = document.createElement("div");
        newTask.classList = "pointer";
        newTask.style.border = "1px solid black";

        const title = document.createElement("div");
        title.textContent = task.title;
        newTask.appendChild(title);

        // const description = document.createElement("div");
        // description.textContent = task.description;
        // newTask.appendChild(description);

        const dueDate = document.createElement("div");
        dueDate.textContent = task.dueDate;
        newTask.appendChild(dueDate);

        const priority = document.createElement("div");
        priority.textContent = task.priority;
        newTask.appendChild(priority);

        // const project = document.createElement("div");
        // project.textContent = task.project;
        // newTask.appendChild(project);

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList = "edittask";
        editButton.addEventListener("click", (e) => {
            e.stopPropagation();
        });
        newTask.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList = "deletetask";
        deleteButton.addEventListener("click", (e) => {
            e.stopPropagation();
            toDos.deleteTask(task);
            projects.deleteTaskFromProject(task);
            if (projects.getCurrentProject() === "all") {
                showAllProjects();
            } else {
                showSelectedProjectTasks(task.project);
            }
        });
        newTask.appendChild(deleteButton);

        newTask.addEventListener("click", () => {
            expandtitle.textContent = task.title;
            expanddesc.textContent = task.description;
            expanddate.textContent = task.dueDate;
            expandpriority.textContent = task.priority;
            expandmodal.showModal();
        });

        return newTask;
    }

    const addNewTask = (task) => {
        const newTask = createTaskDisplay(task);
        tasks.appendChild(newTask);
    }

    const addNewProject = (name) => {
        const newProject = document.createElement("div");
        newProject.textContent = name;

        newProject.addEventListener("click", () => {
            projects.setCurrentProject(newProject.textContent);
            showSelectedProjectTasks(newProject.textContent);
        });

        projectsdisplay.appendChild(newProject);
    }

    const showAllProjects = () => {
        newtask.style.visibility = "hidden";
        tasks.innerHTML = "";
        const allTasks = toDos.getTaskList();
        for (const task of allTasks) {
            const itemdiv = createTaskDisplay(task);
            tasks.appendChild(itemdiv);
        }
    }

    const showSelectedProjectTasks = (name) =>{ 
        newtask.style.visibility = "visible";
        tasks.innerHTML = "";
        const items = projects.getProjectList().get(name);
        for (const item of items) {
            const itemdiv = createTaskDisplay(item);
            tasks.appendChild(itemdiv);
        }
    }

    const displayProjectList = () => {
        const projectMap = projects.getProjectList();
        for (const [name, items] of projectMap) {
            addNewProject(name);
        }
    }

    return {
        addNewTask,
        addNewProject,
        showAllProjects,
        displayProjectList
    }
})();

export default domHandler;