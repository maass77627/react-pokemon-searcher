import React from 'react'
import { Card } from 'semantic-ui-react'
import { useState } from "react";

// class PokemonCard extends React.Component {
  // render() {
  function PokemonCard({pokemon}) {
    const [cardToggle, setCardToggle] = useState(true)
    
    function changeToggle() {
      setCardToggle(!cardToggle)
    }
    
    return (
      <Card>
        <div onClick={changeToggle}>
          <div className="image">
            <img src={cardToggle ? pokemon.sprites.front : pokemon.sprites.back } alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
// }

export default PokemonCard
