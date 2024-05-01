const domHandler = (function() {
    const tasks = document.querySelector("#tasks");

    const addNewTask = (task) => {
        const newTask = document.createElement("div");

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

        tasks.appendChild(newTask);
    }

    return {
        addNewTask
    }
})();

export default domHandler;