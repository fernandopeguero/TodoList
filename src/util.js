

export function childAppender(parent, ...childs) {

    childs.forEach(child => parent.appendChild(child));

}



export function createListItem(text, callback){

    const li = document.createElement('li');

    const p = document.createElement('p');
    const icon = document.createElement('img');

    li.textContent = text;

    li.addEventListener('click', callback);

    childAppender(li, icon, p);

    return li;


}