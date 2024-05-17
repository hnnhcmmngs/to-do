import './style.css';
import listeners from './listeners';
import domHandler from './dom';
import projects from './projects';

projects.setProjectList(new Map(JSON.parse(localStorage.getItem("projectMap"))));
domHandler.displayProjectList();

domHandler.showAllProjects();
listeners.listenAllTasks();

listeners.listenNewTask();
listeners.listenCancelTask();
listeners.listenSubmitTask();

listeners.listenNewProject();
listeners.listenCancelProject();
listeners.listenSubmitProject();

listeners.listenProjectNameInput();