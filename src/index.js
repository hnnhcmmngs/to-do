import './style.css';
import toDos from './todo';
import listeners from './listeners';
import domHandler from './dom';

domHandler.showAllProjects();

listeners.listenNewTask();
listeners.listenCancelTask();
listeners.listenSubmitTask();

listeners.listenNewProject();
listeners.listenCancelProject();
listeners.listenSubmitProject();