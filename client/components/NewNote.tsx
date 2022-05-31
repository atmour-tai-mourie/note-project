import React, { ChangeEvent, FormEvent, useState } from 'react'

function NewNote(): JSX.Element {
  // need a blank note to be automatically removed i.e once unselected the note disapears

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
  // function handleNoteClick(event: React.MouseEvent) {
  //   return
  // }

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
