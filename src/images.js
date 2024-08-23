import task from "./img/task.svg";
import plus from "./img/plus.svg";

export const loadImages = () => { 
    const logo = document.querySelector("#logo");
    logo.src = task;

    const newproject = document.querySelector("#newproject");
    newproject.src = plus;
}