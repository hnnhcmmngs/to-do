import toDos from './todo';
import projects from './projects';

const listeners = (function() {
    const newtask = document.querySelector("#newtask");
    const taskinput = document.querySelector("#taskinput");
    const taskcancel = document.querySelector("#taskcancel");
    const taskform = document.querySelector("#taskform");

    const newproject = document.querySelector("#newproject");
    const projectinput = document.querySelector("#projectinput");
    const projectcancel = document.querySelector("#projectcancel");
    const projectform = document.querySelector("#projectform");

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
                          document.querySelector("#priority").value);
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
        projectform.addEventListener("submit", () => {
            projects.addProject(document.querySelector("#name").value);
            projectform.reset();
        });
    }

    return {
        listenNewTask,
        listenCancelTask,
        listenSubmitTask,
        listenNewProject,
        listenCancelProject,
        listenSubmitProject
    }
})();

export default listeners;