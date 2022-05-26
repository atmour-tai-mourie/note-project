import React, { ChangeEvent, useState } from 'react'

function NewNote(): JSX.Element {
  const [newNote, setNewNote] = useState({ title: '', entry: '' })

  // need to add proper type
  function updateNote(event: any) {
    setNewNote({ ...newNote, [event.target.name]: event.target.value })
  }

  return (
    <article className="note">
      <h3 className="note__title">New Note</h3>
      <form className="note__form">
        <input
          name="title"
          className="note__form__input__title note__form__input"
          type="text"
          placeholder="Title..."
          value={newNote.title}
          onChange={updateNote}
        />
        <textarea
          name="entry"
          className="note__form__input__entry note__form__input"
          value={newNote.entry}
          placeholder="whats up..."
          onChange={updateNote}
        />
      </form>
    </article>
  )
}

export default NewNote
