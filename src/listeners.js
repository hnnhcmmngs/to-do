import toDos from './todo';
import projects from './projects';
import domHandler from './dom';

const listeners = (function() {
    const newtask = document.querySelector("#newtask");
    const taskinput = document.querySelector("#taskinput");
    const taskcancel = document.querySelector("#taskcancel");
    const taskform = document.querySelector("#taskform");

    const newproject = document.querySelector("#newproject");
    const projectinput = document.querySelector("#projectinput");
    const projectcancel = document.querySelector("#projectcancel");
    const projectform = document.querySelector("#projectform");

    const alltasks = document.querySelector("#alltasks");
    const nameinput = document.querySelector("#name");
    const tasktitleinput = document.querySelector("#title");

    const expandtask = document.querySelector("#expandtask");
    const expandclose = document.querySelector("#expandclose");

    const editform = document.querySelector("#editform");
    const edittask = document.querySelector("#edittask");
    const editcancel = document.querySelector("#editcancel");

    const listenNewTask = () => {
        newtask.addEventListener("click", () => {
            taskinput.showModal();
        });
    }

    const listenCancelTask = () => {
        taskcancel.addEventListener("click", (e) => {
            e.preventDefault();
            taskform.reset();
            taskinput.close();
        });
    }

    const listenSubmitTask = () => {
        taskform.addEventListener("submit", () => {
            toDos.addTask(document.querySelector("#title").value,
                          document.querySelector("#description").value,
                          document.querySelector("#duedate").value,
                          document.querySelector("#priority").value,
                          projects.getCurrentProject());
            taskform.reset();
        });
    }

    const listenNewProject = () => {
        newproject.addEventListener("click", () => {
            projectinput.showModal();
        });
    }

    const listenCancelProject = () => {
        projectcancel.addEventListener("click", (e) => {
            e.preventDefault();
            projectform.reset();
            projectinput.close();
        });
    }

    const listenSubmitProject = () => {
        projectform.addEventListener("submit", (e) => {
            projects.addProject(nameinput.value);
            projectform.reset();
        });
    }

    const listenAllTasks = () => {
        alltasks.addEventListener("click", () => {
            projects.setCurrentProject("all");
            domHandler.showAllProjects();
        });
    }

    const listenProjectNameInput = () => {
        nameinput.addEventListener("input", (e) => {
            if (projects.checkProjectNameAvailable(nameinput.value)) {
                nameinput.setCustomValidity("");
            } else {
                nameinput.setCustomValidity("Please enter a unique project name.");
            }
        });
    }

    const listenTaskTitleInput = () => {
        tasktitleinput.addEventListener("input", (e) => {
            if (projects.checkTaskNameAvailable(tasktitleinput.value, projects.getCurrentProject())) {
                tasktitleinput.setCustomValidity("");
            } else {
                tasktitleinput.setCustomValidity("Please enter a unique task name.");
            }
        });
    }

    const listenCloseExpand = () => {
        expandclose.addEventListener("click", () => {
            expandtask.close();
        });
    }

    const listenCancelEdit = () => {
        editcancel.addEventListener("click", (e) => {
            e.preventDefault();
            edittask.close();
        });
    }

    const listenSubmitEdit = () => {
        editform.addEventListener("submit", () => {
            toDos.editTask(domHandler.getCurrentToDoEdit(), 
                           document.querySelector("#edittitle").value,
                           document.querySelector("#editdescription").value,
                           document.querySelector("#editduedate").value,
                           document.querySelector("#editpriority").value);
        });
        editform.reset();
    }

    const listenEditTitleInput = () => {
        const edittitleinput = document.querySelector("#edittitle");
        edittitleinput.addEventListener("input", (e) => {
            console.log(domHandler.getCurrentToDoEdit().title);
            console.log(domHandler.getCurrentToDoEdit().project);
            console.log(edittitleinput.value === domHandler.getCurrentToDoEdit().title);
            if (projects.checkTaskNameAvailable(edittitleinput.value, domHandler.getCurrentToDoEdit().project) || edittitleinput.value === domHandler.getCurrentToDoEdit().title) {
                edittitleinput.setCustomValidity("");
            } else {
                edittitleinput.setCustomValidity("Please enter a unique task name.");
            }
        });
    }

    return {
        listenNewTask,
        listenCancelTask,
        listenSubmitTask,
        listenNewProject,
        listenCancelProject,
        listenSubmitProject,
        listenAllTasks,
        listenProjectNameInput,
        listenTaskTitleInput,
        listenCloseExpand,
        listenCancelEdit,
        listenSubmitEdit,
        listenEditTitleInput
    }
})();

export default listeners;