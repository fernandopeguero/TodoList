
import trashIcon from "./Resources/svg/trash.svg";

//  user profile icons 
import upArrowIcon from "./Resources/svg/up_arrow.svg";
import dropDownIcon from "./Resources/svg/down_arrow.svg";
import bellIcon from "./Resources/svg/bell.svg";
import dashIcon from "./Resources/svg/dashboard.svg";
import userIcon from "./Resources/svg/user.svg";

// side menu icons 
import plusIcon from "./Resources/svg/plus.svg";
import inboxIcon from "./Resources/svg/inbox.svg";
import searchIcon from "./Resources/svg/search.svg";
import todayIcon from "./Resources/svg/today.svg";
import upcomingIcon from "./Resources/svg/upcoming.svg";

// projects icons


export function createProjects() 
{

    let projects = [
            {
              name: "Finish App",
              section: "inbox",
              completed: false,
              date: new Date("2024-06-26")
            },
            {
              name: "Write Documentation",
              section: "today",
              completed: false,
              date: new Date("2024-06-27")
            },
            {
              name: "Grocery Shopping",
              section: "upcoming",
              completed: false,
              date: new Date("2024-06-28")
            },
            {
              name: "Prepare Presentation",
              section: "today",
              completed: false,
              date: new Date("2024-06-30")
            },
            {
              name: "Call Mom",
              section: "inbox",
              completed: false,
              date: new Date("2024-07-01")
            }
          
    ]


    function removeProject(obj) {

        projects = projects.filter(current => current != obj);
    }

    function getProjects() {
        return projects;
    }

    function addToProjectList(project){
        projects.push(project);
    }


    return {
        removeProject,
        addToProjectList,
        getProjects
        

    }
}


export function createProjectController() {


    const projectsActions = createProjects();

    function filterProject(currentSection = "inbox") {

        const currentProjects = projectsActions.getProjects().filter(todo => todo.section === currentSection);

        return currentProjects;
    }


    function completeProject(obj) {
        
        obj.completed = true;

    }


    

    return {
        filterProject,
        completeProject,
        removeTodo: projectsActions.removeProject
    

    }


}


export  function screenController () {


    const body = document.querySelector("body");

    let currentSection = "inbox";

    const projectsController = createProjectController();

    let projects = projectsController.filterProject(currentSection);

        function displayCurrentTodo(pj) {

            const list = [];

            for(const item of pj){
                list.push(createTodo(item));
            }

            return todos;


        }

        function createSideMenu () {

            const list = document.createElement("ul");
            list.classList.add("options");
            
            const addTask = createListItem(plusIcon, "Add task", () => { console.log("Adding task")})
            const search = createListItem( searchIcon, "Search", () => { console.log("Searching for todos ")});
            const inbox = createListItem(inboxIcon, "Inbox", () => { sideMenuClickhandler("inbox")});
            const today = createListItem(todayIcon, "Today", () => {  sideMenuClickhandler("today")})
            const upcoming = createListItem(upcomingIcon, "Upcoming", () => { sideMenuClickhandler("upcoming")})


            childAppender(list, addTask, search, inbox, today, upcoming);

            return list;
            
        }


        function createProjectList( ){

            const container = document.createElement("div");
        
            const title = document.createElement("h3");
            title.textContent = "My Projects";
        
            const projectsList = document.createElement("ul");
            projectsList.classList.add("project_list");
        
            childAppender(container, title, projectsList);
        
            return container;
        }

        function sidebar () {

            const container = document.createElement("aside");
            container.classList.add("sidebar");
        

            const userProfile = createUserToolBar();
            const options = createSideMenu();
            const projects = createProjectList();
            
            childAppender(container, userProfile, options, projects);
                
            return container;
        }

        function createUserToolBar(user = {name: "fernando"}) {
        
        
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
            actionsContainer.classList.add("notifications_container");
        
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


        function content() {

            const container = document.createElement("section");
            container.classList.add("content");
        
            const todos = [];

            for(const todo of projects) {
                todos.push(createTodo(todo, projectsController.removeTodo));
            }
        
            childAppender(container, ...todos)
            
            return container;
        
        }


        function createApp() {

            body.innerHTML = "";
            childAppender(body, sidebar(), content());

        
        }

        function sideMenuClickhandler(section) {

            currentSection = section;

            filterProjects(currentSection);

        }


        function filterProjects(filter) {

            projects = projectsController.filterProject(filter);
            createApp();
        }

        function createTodo(obj, deleteObject) {

            const container = document.createElement("li");
            container.classList.add("todo");
        
            const radioButton = document.createElement("input");
            radioButton.type = "radio";
            radioButton.name = obj.section
        
        
            const text = document.createElement("p");
            text.textContent = obj.name;
        
            const deleteIcon = document.createElement("img");
            deleteIcon.src = trashIcon;
            deleteIcon.addEventListener("click", () => {
                deleteObject(obj)
                resetContent();
            });
        
            childAppender(container, radioButton, text, deleteIcon);
        
            return container;
        
        
        }


        function resetContent(){

            projects = projectsController.filterProject(currentSection);

            createApp();

        }

        function createListItem(img = "", text, callback){

            const li = document.createElement('li');
            li.name = text;
        
            const p = document.createElement('span');
            p.textContent = text;
            const icon = document.createElement('img');
            icon.src = img
        
            li.addEventListener('click', callback);
        
            childAppender(li, icon, p);
        
            return li;
        
        
        }


        function childAppender(parent, ...childs) {

            childs.forEach(child => parent.appendChild(child));
        
        }
        
        



        return {
            displayCurrentTodo,
            createApp
        }



}
