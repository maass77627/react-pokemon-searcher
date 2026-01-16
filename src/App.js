import React from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'
import { useEffect, useState } from 'react'

// const App = () => (
//   <div className="App">
//     <PokemonPage />
//   </div>
// )


function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3002/pokemon")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setPokemon(json)
    })

  }, [])


  return (
    <div className="App">
      <PokemonPage pokemon={pokemon}></PokemonPage>

    </div>
  )
}

export default App
