import { useState } from 'react'
import './App.css'
import Connexion from './composant/connexion/connexion'

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <main>
      <h1>Pâtisserie Carnet 4</h1>
      <Connexion/>
    </main>
  )
}

export default App
