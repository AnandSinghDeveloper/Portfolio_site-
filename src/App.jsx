
import React from 'react'

import { useState } from 'react'
import Header from './components/Header'
import Bainner from './components/Bainner'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>

    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/Bainner" element={<Bainner />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Footer />} />
      
    </Routes>
    <Header/>
      <Bainner/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
      

      
    </>
  )
}

export default App
