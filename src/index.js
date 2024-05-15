import './style.css';
import listeners from './listeners';
import domHandler from './dom';

domHandler.showAllProjects();
listeners.listenAllTasks();

listeners.listenNewTask();
listeners.listenCancelTask();
listeners.listenSubmitTask();

listeners.listenNewProject();
listeners.listenCancelProject();
listeners.listenSubmitProject();

listeners.listenProjectNameInput();