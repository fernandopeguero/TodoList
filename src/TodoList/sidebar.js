import {childAppender} from "../util.js"
import { createUserToolBar } from "./sections/userToolBar.js";
import { createOptionList } from "./optionList.js";
import { createProjectList } from "./optionList.js";


export function createSideBar () {

    
    const container = document.createElement("aside");
    container.classList.add("sidebar");

    const userProfile = createUserToolBar();
    const options = createOptionList();
    const projects = createProjectList();

    childAppender(container, userProfile, options, projects);
    
    return container;
}