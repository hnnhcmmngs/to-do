import task from "./img/task.svg";

export const loadImages = () => { 
    const logo = document.querySelector("#logo");
    logo.src = task;
}