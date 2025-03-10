import Presentation from "./components/Presentation"
//import Experience from "./components/Experience"
import Competences from "./components/Competences"
import Projets from "./components/Projets"
import Contact from "./components/Contact"
import NavBar from './components/NavBar'
import './App.css'
import './index.css'

function App() {

  return (
    <>
    <div>
      <NavBar />
      <Presentation />
      <Competences />
      <Projets />
      <Contact />
    </div>
    </>
  )
}

export default App
