import React, { useState } from 'react'
import NewNote from './NewNote'

// NEED TO GIVE BOARD fixed size so postnotes have fixed points
// ability to move / zoom easily

function Board(): JSX.Element {
  const [showNewNote, setShowNewNote] = useState(false)
  // need to remove initial state and set type for notes explicitly
  const [notes, setNotes] = useState([
    { title: '', entry: '', startingPostion: [0, 0] },
  ])

  function handleMainClick(event: React.MouseEvent) {
    setNotes([
      ...notes,
      { title: '', entry: '', startingPostion: [event.clientX, event.clientY] },
    ])
    event
  }

  return (
    <section className="board" onClick={handleMainClick}>
      {notes.map((note) => (
        <NewNote startingPosition={note.startingPostion} />
      ))}
    </section>
  )
}

export default Board
