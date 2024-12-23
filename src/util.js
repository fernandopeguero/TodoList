

export function childAppender(parent, ...childs) {

    childs.forEach(child => parent.appendChild(child));

}

export function createListItem(text){

    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = "#";
    a.addEventListener('click' , (e) => {
        e.preventDefault();
    })
    a.textContent = text;

    li.appendChild(a);

    return li;


}