import { childAppender, createListItem } from "../util";

import plusIcon from '../Resources/svg/plus.svg'

export function createOptionList() {

    const list = document.createElement("ul");
    list.classList.add("options");

    const addTask = createListItem( "Add task", () => { console.log("Adding a task to selected option")})
    const search = createListItem("Search", () => { console.log("Searching for task.")});
    const inbox = createListItem("Inbox", () => { console.log("Inbox Task.")});
    const upcoming = createListItem("Upcoming", () => {console.log("Upcoming projects")})

    childAppender(list, addTask, search, inbox, upcoming);

    return list;
    
}

export function createProjectList( ){

    const container = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = "My Projects";

    const projectsList = document.createElement("ul");

    childAppender(container, title, projectsList);


    return container;
}