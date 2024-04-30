import toDos from './todo';

const listeners = (function() {
    const newtask = document.querySelector("#newtask");
    const taskinput = document.querySelector("#taskinput");
    const taskcancel = document.querySelector("#taskcancel");
    const taskform = document.querySelector("#taskform");

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

    return {
        listenNewTask,
        listenCancelTask,
        listenSubmitTask
    }
})();

export default listeners;