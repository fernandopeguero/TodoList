import { childAppender } from "../../util";

import upArrowIcon from "../../Resources/svg/up_arrow.svg";
import dropDownIcon from "../../Resources/svg/down_arrow.svg";
import bellIcon from "../../Resources/svg/bell.svg";
import dashIcon from "../../Resources/svg/dashboard.svg";
import userIcon from "../../Resources/svg/user.svg";

// create the user profile top tool bar 
export function createUserToolBar(user = {name: "fernando"}) {


    const container = document.createElement("article");
    container.classList.add("profile_container");


    const userContainer = document.createElement("div");

    const profilePhoto = document.createElement("img");
    profilePhoto.classList.add("profile_img");
    profilePhoto.src = userIcon;
    profilePhoto.height = 30;
    profilePhoto.width = 30;

    const name = document.createElement("p");
    name.textContent = user.name;

    const dropDownIcon = document.createElement("img");
    dropDownIcon.src = upArrowIcon;

    childAppender(userContainer, profilePhoto, name, dropDownIcon);
    const actionsContainer = document.createElement("div");

    const notifications = document.createElement("img");
    notifications.src = bellIcon;
    notifications.classList.add("bell");

    const hideSideBar = document.createElement("img");
    hideSideBar.classList.add("dash")
    hideSideBar.src = dashIcon;

    childAppender(actionsContainer, notifications, hideSideBar)

    childAppender(container, userContainer, actionsContainer);

    return container;
}