import React from 'react'
import './App.css'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/NavBar'
import Service from './components/Service'
import Contact from './components/Contact'

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
    </React.Fragment>
  )
}

export default App
