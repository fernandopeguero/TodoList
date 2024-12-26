import { childAppender, createListItem } from "../util";

import plusIcon from "../Resources/svg/plus.svg";
import inboxIcon from "../Resources/svg/inbox.svg";
import searchIcon from "../Resources/svg/search.svg";
import upcomingIcon from "../Resources/svg/upcoming.svg";

export function createOptionList() {

    const list = document.createElement("ul");
    list.classList.add("options");

    const addTask = createListItem(plusIcon, "Add task", () => { console.log("Adding a task to selected option")})
    const search = createListItem( searchIcon, "Search", () => { console.log("Searching for task.")});
    const inbox = createListItem(inboxIcon, "Inbox", () => { console.log("Inbox Task.")});
    const upcoming = createListItem(upcomingIcon, "Upcoming", () => {console.log("Upcoming projects")})

    childAppender(list, addTask, search, inbox, upcoming);

    return list;
    
}

export function createProjectList( ){

    const container = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = "My Projects";

    const projectsList = document.createElement("ul");
    projectsList.classList.add("project_list");

    childAppender(container, title, projectsList);

    return container;
}