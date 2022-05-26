import React, { useEffect } from 'react'
import Board from './Board'
import Header from './Header'
import Main from './Main'

function App(): JSX.Element {
  return (
    <>
      <div className="app">
        <Header />
        <Main />
      </div>
    </>
  )
}

export default App
