import React, { useState } from 'react'
import NewNote from './NewNote'

function Board(): JSX.Element {
  const [showNewNote, setShowNewNote] = useState(false)

  function handleMainClick() {
    setShowNewNote(true)
  }

  return (
    <section className="board" onClick={handleMainClick}>
      {showNewNote && <NewNote />}
    </section>
  )
}

export default Board
