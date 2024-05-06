import domHandler from "./dom";

const projects = (function() {
    const projectList = [];

    const addProject = (name) => {
        projectList.push(name);
        console.log(projectList);
        domHandler.addNewProject(name);
    }

    return {
        projectList,
        addProject
    }
})();

export default projects;