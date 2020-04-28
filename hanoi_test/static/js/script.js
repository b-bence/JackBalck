const draggableElements = document.querySelectorAll(".draggable");
const droppableElements = document.querySelectorAll(".droppable");

draggableElements.forEach(elem =>{
    elem.addEventListener("dragstart", dragstart);
    elem.setAttribute("draggable", "true")
})

droppableElements.forEach(elem =>{
    elem.addEventListener("dragover", allowDrop);
    elem.addEventListener("drop", drop);
})

function dragstart(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    let list = event.target
    list.insertBefore(document.getElementById(data), list.childNodes[0])
    console.log(list.childNodes)
}