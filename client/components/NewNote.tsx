import React, { ChangeEvent, FormEvent, useState } from 'react'

function NewNote(): JSX.Element {
  // need a blank note to be automatically removed i.e once unselected the note disapears
  interface mousePositions {pos1: number, pos2: number, pos3: number, pos4: number}

  const [newNote, setNewNote] = useState({ title: '', entry: '' })

  function updateNoteTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setNewNote({
      ...newNote,
      title: event.target.value,
    })
  }

  function updateNoteEntry(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewNote({
      ...newNote,
      entry: event.target.value,
    })
  }

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
  }

  // need to create function/ logic to prevent new notes being created
  function handleNoteClick(event: React.MouseEvent) {
    event.stopPropagation()
    const mousePositions = {pos1: 0, pos2: 0, pos3: 0, pos4: 0}
    dragMouseDown(event, mousePositions)
  }


  //https://stackoverflow.com/questions/61292302/move-able-drag-able-div-in-react
  // https://javascript.plainenglish.io/how-to-make-a-simple-custom-usedrag-react-hook-6b606d45d353s
  function dragMouseDown(event: React.MouseEvent, mousePositions: mousePositions) {
    event = event || window.event;
    event.preventDefault();
    // get the mouse cursor position at startup:
    mousePositions.pos3 = event.clientX;
    mousePositions.pos4 = event.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e: React.MouseEvent,  mousePositions: mousePositions) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    mousePositions.pos1 = mousePositions.pos3 - e.clientX;
    mousePositions.pos2 = mousePositions.pos4 - e.clientY;
    mousePositions.pos3 = e.clientX;
    mousePositions.pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
}
}

  return (
    <article className="note" onClick={handleNoteClick}>
      <form className="note__form" onSubmit={handleSubmit}>
        <input
          name="title"
          className="note__form__input__title note__form__input"
          type="text"
          placeholder="Title..."
          value={newNote.title}
          onChange={updateNoteTitle}
        />
        <textarea
          name="entry"
          className="note__form__input__entry note__form__input"
          value={newNote.entry}
          placeholder="whats up..."
          onChange={updateNoteEntry}
        />
      </form>
    </article>
  )
}

export default NewNote
