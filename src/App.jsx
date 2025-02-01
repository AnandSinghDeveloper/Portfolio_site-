
import React from 'react'

import { useState } from 'react'
import Header from './components/Header'
import Bainner from './components/Bainner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Bainner/>
      <About/>
      <Skills/>
      <Projects/>
    </>
  )
}

export default App
