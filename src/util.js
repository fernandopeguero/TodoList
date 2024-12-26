

export function createProjects() {
    
    const projects = [

    ]



    function removeProject(obj) {

        projects = this.filter(current => current != obj);
    }


    function completeProject(obj) {
        obj.completed = true;
    }


    return {
        projects,
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