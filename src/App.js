import Navbar from './components/NavBar/NavBar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'
import Experience from './components/Experience/Experience'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App;
