import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Education from './components/Education'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {

  return (
    <div style={{ background: '#030712', minHeight: '100vh' }}>
      <Sidenav />
      <Main />
      <TechStack />
      <Work />
      <Education />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
