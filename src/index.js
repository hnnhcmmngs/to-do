import './style.css';
import listeners from './listeners';
import domHandler from './dom';
import projects from './projects';
import toDos from './todo';
import { loadImages } from './images';

projects.setProjectList(new Map(JSON.parse(localStorage.getItem("projectMap"))));
let taskStorage = localStorage.getItem("taskList");
toDos.setTaskList(taskStorage ? JSON.parse(taskStorage) : []);
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
listeners.listenTaskTitleInput();

listeners.listenCloseExpand();

listeners.listenCancelEdit();
listeners.listenSubmitEdit();
listeners.listenEditTitleInput();

loadImages();