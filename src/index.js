import "./style.css";
import { createContent } from "./TodoList/content";
import { createSideBar } from "./TodoList/sidebar";
import { childAppender } from "./util";

const body = document.querySelector("body");

const projects = [
    {
        name: "something nice",
        description: "whatss this project about",
        completed: false,
        todos: [

        ]
    }
]


function initiliazeApp() {

    const sidebar = createSideBar();
    const content = createContent();

    childAppender(body, sidebar, content);
    
}


initiliazeApp();