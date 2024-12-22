import { childAppender } from "../../util";



// create the user profile top tool bar 
export function createUserToolBar(user = {name: "fernando"}) {


    const container = document.createElement("article");
    container.classList.add("profile_container");


    const userContainer = document.createElement("div");

    const profilePhoto = document.createElement("img");
    profilePhoto.height = 30;
    profilePhoto.width = 30;

    const name = document.createElement("p");
    name.textContent = user.name;

    const dropDownIcon = document.createElement("i");
    dropDownIcon.textContent = "^";

    childAppender(userContainer, profilePhoto, name, dropDownIcon);
    const actionsContainer = document.createElement("div");

    const notifications = document.createElement("i");
    const hideSideBar = document.createElement("i");

    childAppender(actionsContainer, notifications, hideSideBar)

    childAppender(container, userContainer, actionsContainer);

    return container;
}