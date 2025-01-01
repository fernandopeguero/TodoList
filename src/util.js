
import trashIcon from "./Resources/svg/trash.svg";

//  user profile icons 
import upArrowIcon from "./Resources/svg/up_arrow.svg";
import downArrowIcon from "./Resources/svg/down_arrow.svg";
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
        
        obj.completed = !obj.completed;

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

    /*
        create object of the current projects sections inbox as default 
    */
    let projects = projectsController.filterProject(currentSection);

        function displayCurrentTodo(pj) {

            const list = [];

            for(const item of pj){
                list.push(createTodo(item));
            }

            return todos;


        }

        /*
            Create the side menu list and interactions
        */
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

        /*
            create title and icons for project section of sidebar 
        */

        function createTitleToolBar(name) {

            const container = document.createElement("div");
            container.classList.add("project_toolbar");

            const title = document.createElement("h3");
            title.textContent = name;

            const icons = document.createElement("div");

            const addIcon = document.createElement("img");
            addIcon.src = plusIcon;

            const dropDownIcon = document.createElement("img");
            dropDownIcon.src = downArrowIcon;

            childAppender(icons, addIcon, dropDownIcon);

            childAppender(container, title, icons);

           return container;



        }

        /*
            Create the empty list were the project will be house
        */

        function createProjectList( ){

            const container = document.createElement("div");
        
            const title = createTitleToolBar("My Projects")
        
            const projectsList = document.createElement("ul");
            projectsList.classList.add("project_list");
        
            childAppender(container, title, projectsList);
        
            return container;
        }

        /*
            Create side the entire side menu list item and project items elements
        */

        function sidebar () {

            const container = document.createElement("aside");
            container.classList.add("sidebar");
        

            const userProfile = createUserToolBar();
            const options = createSideMenu();
            const projects = createProjectList();
            
            childAppender(container, userProfile, options, projects);
                
            return container;
        }

        /*
            Create top user tool bar and interations
        */
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

        /*
            create content and section for the display of task/completed todos
        */

        function content() {

            const container = document.createElement("section");
            container.classList.add("content_section");

            const sectionTitle = document.createElement("h1");
            sectionTitle.textContent = currentSection;

            const todosContainer = document.createElement("section");
            todosContainer.classList.add("todos_container");

            const todoSection = document.createElement("section");
            todoSection.classList.add("todo_section");

            const todoTitle = document.createElement("h2");
            todoTitle.textContent = "Task";

            todoSection.appendChild(todoTitle);

            const completedTodo = document.createElement("section");
            completedTodo.classList.add("completed_todo");

            const completeTodoTitle = document.createElement("h2");
            completeTodoTitle.textContent = "Completed";

            completedTodo.appendChild(completeTodoTitle);
    
            for(const todo of projects) {

                const current = createTodo(todo, projectsController.removeTodo)

                if(!todo.completed) {
                    todoSection.appendChild(current)
                } else {
                    completedTodo.appendChild(current)
                }
                
            }
        
            childAppender(todosContainer, todoSection, completedTodo);
            childAppender(container, sectionTitle, todosContainer);
            
            return container;
        
        }


        /* creates the app */
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
        
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = obj.completed;

            checkbox.addEventListener('click', function (e) {

                    projectsController.completeProject(obj);
                    resetContent();
            })
        
        
            const text = document.createElement("p");
            text.textContent = obj.name;
            if(obj.completed) text.classList.add("completed");
        
            const deleteIcon = document.createElement("img");
            deleteIcon.src = trashIcon;
            deleteIcon.addEventListener("click", () => {
                deleteObject(obj)
                resetContent();
            });
        
            childAppender(container, checkbox, text, deleteIcon);
        
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
