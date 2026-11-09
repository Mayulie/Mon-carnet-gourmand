import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

 function Login () {
    return (
       <form>
        <label htmlFor='username'>Nom utilisateur</label>
        <input id="username"></input>
        <br/>
        <label htmlFor='motdepasse'>Mot de passe</label>
        <input id="motdepasse"></input>
      </form>
    )
  }

function App() {
  const [count, setCount] = useState(0)

 
  return (
    <main>
      <h1>Pâtisserie Carnet 2</h1>
      <Login/>
    </main>
  )
}

export default App
