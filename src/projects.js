import domHandler from "./dom";

const projects = (function() {
    const projectList = new Map();
    let currentProject = "all";

    const addProject = (name) => {
        projectList.set(name, []);
        console.log(projectList);
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

    const addTaskToProject = (name, task) => {
        projectList.get(name).push(task);
        console.log(projectList);
    }

    return {
        projectList,
        addProject,
        setCurrentProject,
        getCurrentProject,
        checkProjectNameAvailable,
        addTaskToProject
    }
})();

export default projects;