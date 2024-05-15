import domHandler from "./dom";

const projects = (function() {
    const projectList = [];
    let currentProject = "all";

    const addProject = (name) => {
        projectList.push(name);
        console.log(projectList);
        domHandler.addNewProject(name);
    }

    const setCurrentProject = (project) => {
        currentProject = project;
    }

    const getCurrentProject = (project) => {
        return currentProject;
    }

    return {
        projectList,
        addProject,
        setCurrentProject,
        getCurrentProject
    }
})();

export default projects;