import {childAppender} from "../util.js"
import { createUserToolBar } from "./sections/userToolBar.js";


export function createSideBar () {

    
    const container = document.createElement("aside");
    container.classList.add("sidebar");

    const userProfile = createUserToolBar();
    

    childAppender(container, userProfile);
    
    return container;
}