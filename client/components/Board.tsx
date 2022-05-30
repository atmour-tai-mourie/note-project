import React, { useState } from 'react'
import NewNote from './NewNote'

function Board(): JSX.Element {
  const [showNewNote, setShowNewNote] = useState(false)
  // need to remove initial state and set type for notes explicitly
  const [notes, setNotes] = useState([{ title: '', entry: '' }])

  function handleMainClick() {
    setNotes([...notes, { title: '', entry: '' }])
  }

  return (
    <section className="board" onClick={handleMainClick}>
      {notes.map(() => (
        <NewNote />
      ))}
    </section>
  )
}

export default Board
