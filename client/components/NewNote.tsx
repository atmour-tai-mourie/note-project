import React, { ChangeEvent, FormEvent, useState } from 'react'

function NewNote(): JSX.Element {
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

  // need to add proper type
  function handleSubmit(form: any) {
    form.preventDefault()
  }

  return (
    <article className="note">
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
