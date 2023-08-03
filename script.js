
const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", addNote)


function addNote() {

    const appDiv = document.getElementById("app");
    const newNote = document.createElement("textarea");
    newNote.setAttribute("cols", "30");
    newNote.setAttribute("rows","10");
    newNote.setAttribute("class", "note");
    newNote.setAttribute("placeholder" , "Empty Note");

    appDiv.appendChild(newNote);

    newNote.addEventListener("dblclick", () => {
        appDiv.removeChild(newNote);
      });


  }

 