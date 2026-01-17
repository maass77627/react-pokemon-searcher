import React from 'react'
import { useState } from "react"

// const Search = props => {
  function Search({searchPokemonByName, showAllPokemon}) {
    const [name, setName] = useState("")

    function handleNameChange(e) {
       setName(e.target.value)
    }

    
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e)=> handleNameChange(e)} type="text" value={name} className="prompt"/>
        <button
          className="ui icon button"
          onClick={() => searchPokemonByName(name)}
        >
        <i className="search icon" />
        </button>
        <button onClick={showAllPokemon}>All Pokemon</button>
      </div>
    </div>
  )
}

export default Search
