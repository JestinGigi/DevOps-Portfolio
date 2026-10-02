import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Marquee from './components/Marquee'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Work from './components/Work'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <a href='#main-content' className='skip-link'>Skip to content</a>
      <Sidenav />
      <main id='main-content' tabIndex={-1} className='outline-none'>
        <Main />
        <Marquee />
        <About />
        <TechStack />
        <Projects />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
