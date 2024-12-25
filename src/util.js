

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