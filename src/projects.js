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

    const getCurrentProject = () => {
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

    const deleteTaskFromProject = (task) => {
        projectList.set(task.project, projectList.get(task.project).filter((todo) => !(todo.title === task.title)));
        localStorage.setItem("projectMap", JSON.stringify(Array.from(projectList.entries())));
        console.log(projectList);
    }

    const editTaskInProjet = (project, oldtitle, newtitle, newdesc, newdate, newpriority) => {
        const idx = projectList.get(project).findIndex(x => x.title === oldtitle);
        projectList.get(project)[idx].title = newtitle;
        projectList.get(project)[idx].description = newdesc;
        projectList.get(project)[idx].dueDate = newdate;
        projectList.get(project)[idx].priority = newpriority;
        console.log(projectList.get(project));
        console.log(idx);
        localStorage.setItem("projectMap", JSON.stringify(Array.from(projectList.entries())));

        if (currentProject === "all") {
            domHandler.showAllProjects();
        } else {
            domHandler.showSelectedProjectTasks(currentProject);
        }
    }

    const deleteProject = (projectName) => {
        projectList.delete(projectName);
        localStorage.setItem("projectMap", JSON.stringify(Array.from(projectList.entries())));
        console.log(projectList);
    }

    return {
        addProject,
        setCurrentProject,
        getCurrentProject,
        checkProjectNameAvailable,
        checkTaskNameAvailable,
        addTaskToProject,
        getProjectList,
        setProjectList,
        deleteTaskFromProject,
        editTaskInProjet,
        deleteProject
    }
})();

export default projects;