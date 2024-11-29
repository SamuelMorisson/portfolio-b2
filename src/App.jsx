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
    /*
    Reste à faire:
     - Bug NavBar Burger occupe l'écran même absent
     - Améliorer présentation
     - Formulaire de contact fonctionnel
     
    (non prioritaires)
     - Parcours/Expériencs
     - Adapter partie "projets" en caroussel
     - ajouter images compressées
    */
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
