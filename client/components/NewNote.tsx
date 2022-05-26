import React, { ChangeEvent, useState } from 'react'

function NewNote(): JSX.Element {
  const [newNote, setNewNote] = useState({ title: '', entry: '' })

  // need to add proper type
  function updateNote(event: any) {
    setNewNote({ ...newNote, [event.target.name]: event.target.value })
  }

  return (
    <article className="note__container">
      <h3>New Note</h3>
      <form>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          type="text"
          value={newNote.title}
          onChange={updateNote}
        ></input>
        <input
          name="entry"
          type="text"
          value={newNote.entry}
          placeholder="whats up"
          onChange={updateNote}
        ></input>
      </form>
    </article>
  )
}

export default NewNote
