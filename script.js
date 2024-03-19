const createBtn = document.querySelector(".create-btn");
const notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
    let paraBox = document.createElement("p");
    paraBox.setAttribute("contenteditable", "true");
    paraBox.classList.add("input-box");
    let img = document.createElement("img");
    img.src = "images/delete.png";
    notesContainer.appendChild(paraBox).appendChild(img);
})

notesContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach((nt) => {
            nt.onKeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})