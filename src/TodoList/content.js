import { createUserToolBar } from "./sections/userToolBar";
import { childAppender, createProjects } from "../util";
import { currentSection } from "../util";


const project = createProjects();

export function createContent(projects) {

    const container = document.createElement("section");
    container.classList.add("content");

    const todos = project.displayTask();

    childAppender(container, ...todos)
    
    return container;

}