import Navbar from './components/NavBar/NavBar'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App;
