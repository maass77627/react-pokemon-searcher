import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

// class PokemonPage extends React.Component {
function PokemonPage ({pokemon, searchPokemonByName, showAllPokemon, addNewPokemon}) {
  // render() {





    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addNewPokemon={addNewPokemon} />
        <br />
        <Search showAllPokemon={showAllPokemon} searchPokemonByName={searchPokemonByName} />
        <br />
        <PokemonCollection pokemon={pokemon} />
      </Container>
    )
  }


export default PokemonPage
