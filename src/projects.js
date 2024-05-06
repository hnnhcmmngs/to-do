const projects = (function() {
    const projectList = [];

    const addProject = (name) => {
        projectList.push(name);
        console.log(projectList);
    }

    return {
        projectList,
        addProject
    }
})();

export default projects;