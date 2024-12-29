
import trashIcon from "./Resources/svg/trash.svg";

export function createProjects() 
{

    const projects = [
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

        projects = this.filter(current => current != obj);
    }

    function getProjects() {
        return Object.assign(projects)
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

    const projects = filterProject("inbox");

    function filterProject(currentSection = "inbox") {

        const currentProjects = projects.filter(todo => todo.section === currentSection);

        return currentProjects;
    }


    function completeProject(obj) {
        
        obj.completed = true;

    }


    

    return {
        filterProject,
        completeProject,
    

    }


}


export  function screenController () {


    const body = document.querySelector("body");

    const sidebarButtons = ["Add Task", "Search", "Inbox", "Today", "Upcoming"];

    
        const projectsController = createProjectController();

        let projects = projectsController.filterProject('inbox');

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
            
            const addTask = createListItem(plusIcon, "Add task", () => { console.log("Adding a task to selected option")})
            const search = createListItem( searchIcon, "Search", () => { console.log("Searching for task.")});
            const inbox = createListItem(inboxIcon, "Inbox", () => { callback( setCurrentSection("inbox"))});
            const today = createListItem(todayIcon, "Today", () => { callback(setCurrentSection("today"))})
            const upcoming = createListItem(upcomingIcon, "Upcoming", () => { callback(setCurrentSection("upcoming"))})


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

        function sideMenuClickhandler(e) {

            console.log(e.target.name);

        }



        return {
            displayCurrentTodo
        }



}



export function childAppender(parent, ...childs) {

    childs.forEach(child => parent.appendChild(child));

}



export function createListItem(img = "", text, callback){

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

export function createTodo(obj, deleteObject) {

    const container = document.createElement("li");
    container.classList.add("todo");

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = obj.section


    const text = document.createElement("p");
    text.textContent = obj.name;

    const deleteIcon = document.createElement("img");
    deleteIcon.src = trashIcon;
    deleteIcon.addEventListener("click", () => {deleteObject(obj)});

    childAppender(container, radioButton, text, deleteIcon);

    return container;


}