import domHandler from "./dom";

const projects = (function() {
    let projectList = new Map();
    let currentProject = "all";

    const addProject = (name) => {
        projectList.set(name, []);
        localStorage.setItem("projectMap", JSON.stringify(Array.from(projectList.entries())));
        domHandler.addNewProject(name);
    }

    const setCurrentProject = (project) => {
        currentProject = project;
    }

    const getCurrentProject = (project) => {
        return currentProject;
    }

    const checkProjectNameAvailable = (name) => {
        if (projectList.has(name)) {
            return false;
        }
        return true;
    }

    const checkTaskNameAvailable = (taskName, projectName) => {
        for (const todo of projectList.get(projectName)) {
            if (todo.title === taskName) {
                return false;
            }
        }
        return true;
    }

    const addTaskToProject = (name, task) => {
        projectList.get(name).push(task);
        localStorage.setItem("projectMap", JSON.stringify(Array.from(projectList.entries())));
        console.log(projectList);
    }

    const getProjectList = () => {
        return projectList;
    }

    const setProjectList = (storage) => {
        projectList = storage;
    }

    return {
        addProject,
        setCurrentProject,
        getCurrentProject,
        checkProjectNameAvailable,
        checkTaskNameAvailable,
        addTaskToProject,
        getProjectList,
        setProjectList
    }
})();

export default projects;