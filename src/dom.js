import projects from "./projects";
import toDos from "./todo";
import edit from "./img/edit.svg";
import deleteIcon from "./img/delete.svg";
import deleteSolid from "./img/delete-solid.svg";
import { compareAsc, format } from "date-fns";

const domHandler = (function() {
    const tasks = document.querySelector("#tasks");
    const alltasks = document.querySelector("#alltasks");
    const projectsdisplay = document.querySelector("#projects");
    const newtask = document.querySelector("#newtask");
    const expandmodal = document.querySelector("#expandtask");
    const expandtitle = document.querySelector("#expandtitle");
    const expanddesc = document.querySelector("#expanddesc");
    const expanddate = document.querySelector("#expanddate");
    const expandpriority = document.querySelector("#expandpriority");
    const edittask = document.querySelector("#edittask");
    const edittitle = document.querySelector("#edittitle");
    const editdesc = document.querySelector("#editdescription");
    const editduedate = document.querySelector("#editduedate");
    const editpriority = document.querySelector("#editpriority");

    let currentToDoEdit = undefined;

    const createTaskDisplay = (task) => {
        const newTask = document.createElement("div");
        newTask.classList = `pointer card ${task.priority}`;

        const checkboxWrapper = document.createElement("div");
        checkboxWrapper.classList = "checkbox-wrapper-13";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("click", (e) => {
            e.stopPropagation();
        });
        checkboxWrapper.append(checkbox);
        newTask.appendChild(checkboxWrapper);

        const container = document.createElement("div");

        const title = document.createElement("div");
        title.textContent = task.title;
        title.style.fontSize = "18px";
        title.style.fontWeight = "500";
        container.appendChild(title);

        const dueDate = document.createElement("div");
        dueDate.textContent = format(new Date(task.dueDate), "d MMM yyyy");
        container.appendChild(dueDate);

        const editButton = document.createElement("img");
        editButton.src = edit;
        editButton.width = "25";
        editButton.height = "25";
        editButton.classList = "filter";
        editButton.addEventListener("click", (e) => {
            e.stopPropagation();
            edittitle.value = task.title;
            editdesc.value = task.description;
            editduedate.value = task.dueDate;
            editpriority.value = task.priority;
            currentToDoEdit = task;
            edittitle.setCustomValidity("");
            edittask.showModal();
        });
        container.appendChild(editButton);

        const deleteButton = document.createElement("img");
        deleteButton.src = deleteIcon;
        deleteButton.width = "25";
        deleteButton.height = "25";
        deleteButton.classList = "red";
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
        container.appendChild(deleteButton);

        newTask.appendChild(container);

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
        newProject.classList = "pointer background";

        const projectName = document.createElement("div");
        projectName.textContent = name;
        newProject.appendChild(projectName);

        const trash = document.createElement("img");
        trash.src = deleteSolid;
        trash.width = "22";
        trash.height = "22";
        trash.classList = "show red";
        trash.addEventListener("click", (e) => {
            e.stopPropagation();
            projects.deleteProject(name);
            toDos.deleteProject(name);
            if (projects.getCurrentProject() === "all") {
                showAllProjects();
            } else if (projects.getCurrentProject() === name) {
                projects.setCurrentProject("all");
                showAllProjects();
            } else {
                showSelectedProjectTasks(name);
            }
            displayProjectList();
        });
        newProject.appendChild(trash);

        newProject.addEventListener("click", () => {
            projects.setCurrentProject(newProject.textContent);
            showSelectedProjectTasks(newProject.textContent);

            const activeElements = document.getElementsByClassName("active");
            for (let i = 0; i < activeElements.length; i++) {
                activeElements[i].classList.remove("active");
            }

            newProject.classList.add("active");
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

        const activeElements = document.getElementsByClassName("active");
        for (let i = 0; i < activeElements.length; i++) {
            activeElements[i].classList.remove("active");
        }

        alltasks.classList.add("active");
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
        projectsdisplay.innerHTML = "";
        const projectMap = projects.getProjectList();
        for (const [name, items] of projectMap) {
            addNewProject(name);
        }
    }

    const getCurrentToDoEdit = () => {
        return currentToDoEdit;
    }

    return {
        addNewTask,
        addNewProject,
        showAllProjects,
        showSelectedProjectTasks,
        displayProjectList,
        getCurrentToDoEdit
    }
})();

export default domHandler;