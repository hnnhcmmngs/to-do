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
        })
    }

    return {
        listenNewTask,
        listenCancelTask
    }
})();

export default listeners;