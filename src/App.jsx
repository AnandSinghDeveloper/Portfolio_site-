
import React from 'react'

import { useState } from 'react'
import Header from './components/Header'
import Bainner from './components/Bainner'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Bainner/>
      <About/>
      <Skills/>
    </>
  )
}

export default App
