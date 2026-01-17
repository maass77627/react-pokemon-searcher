import React from 'react'
import { Form } from 'semantic-ui-react'
import { useState } from "react"

// class PokemonForm extends React.Component {
function PokemonForm({addNewPokemon}) {
  const [formData, setFormData] = useState({
    name: "",
    hp: 7,
    sprites: {
    front: "", 
    back: "" 
    }
  })

  function handleNameChange(e) {
     console.log(e.target.value)
    setFormData({...formData, name: e.target.value})

  }

  function handleHpChange(e) {
     console.log(e.target.value)
    setFormData({...formData, hp: e.target.value})

  }

  function handleFrontChange(e) {
    const value = e.target.value   

  setFormData(prev => ({
    ...prev,
    sprites: {
      ...prev.sprites,
      front: value
    }
  }))


  }

  function handleBackChange(e) {
   const value = e.target.value   

  setFormData(prev => ({
    ...prev,
    sprites: {
      ...prev.sprites,
      back: value
    }
  }))

  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    fetch("http://localhost:3002/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
        
      
    })
    .then((r) => r.json())
    .then((json) => {
      console.log("created", json)
     let pokemon = json
      addNewPokemon(pokemon)
    })
  }

 


  // render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(e) => {handleSubmit(e)}}>
          <Form.Group widths="equal">
            <Form.Input onChange={(e) => handleNameChange(e)} fluid label="Name" placeholder="Name" name="name" value={formData.name} />
            <Form.Input onChange={(e) => handleHpChange(e)} fluid label="hp" placeholder="hp" name="hp" value={formData.hp} />
            <Form.Input onChange={(e) => handleFrontChange(e)} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={formData.sprites.front} />
            <Form.Input onChange={(e) => handleBackChange(e)} fluid label="Back Image URL" placeholder="url" name="backUrl" value={formData.sprites.back} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  // }
}

export default PokemonForm
