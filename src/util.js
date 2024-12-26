

export function createProjects() {
    
    const projects = [
        [
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
    ]





    function removeProject(obj) {

        projects = this.filter(current => current != obj);
    }


    function completeProject(obj) {
        obj.completed = true;
    }


    function getProjects() {

        return Object.assign(projects);
    }

    function getInboxTask() {

        return projects.filter(task => task.section === "inbox")
    }


    return {
        getProjects,
        removeProject,
        completeProject
    }
}

export const projects = {
    inbox: {},
    search: {},
    upcoming: {},
    projects: {
        
    }
}



export function childAppender(parent, ...childs) {

    childs.forEach(child => parent.appendChild(child));

}



export function createListItem(img = "", text, callback){

    const li = document.createElement('li');

    const p = document.createElement('span');
    p.textContent = text;
    const icon = document.createElement('img');
    icon.src = img

    li.addEventListener('click', callback);

    childAppender(li, icon, p);

    return li;


}

export function createTodo(obj) {

    const container = document.createElement("li");
    container.classList.add("todo");

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = obj.section


    const text = document.createElement("p");
    text.textContent = obj.name;


}