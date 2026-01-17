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
  const [filteredPokemon, setFilteredPokemon] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3002/pokemon")
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
      setPokemon(json)
      setFilteredPokemon(json)
    })

  }, [])

  function searchPokemonByName(name) {
    console.log("clicked")
    console.log(name)
     let newPokemon = pokemon.filter((pok) => pok.name === name)
     console.log(newPokemon)
   setFilteredPokemon(newPokemon)
}

function showAllPokemon() {
  setFilteredPokemon(pokemon)
}

function addNewPokemon(pokemon) {
  setPokemon([...pokemon, pokemon])


}

  return (
    <div className="App">
      <PokemonPage addNewPokemon={addNewPokemon} showAllPokemon={showAllPokemon} searchPokemonByName={searchPokemonByName} pokemon={filteredPokemon}></PokemonPage>

    </div>
  )
}

export default App
