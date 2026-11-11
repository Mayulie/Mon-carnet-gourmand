import { useState } from 'react'
import './App.css'
import Connexion from './composant/connexion/connexion'

function App() {

  const [connecte, setConnecte] = useState(false)

 
  return (
    <main>
      <h1>Pâtisserie Carnet 4</h1>
      {connecte?(
        <p>Accueil</p>
      ):(
        <Connexion setConnecte={setConnecte}/>
      )}
     
    </main>
  )
}

export default App
