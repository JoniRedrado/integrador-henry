import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Detail = () => {

  const [ character, setCharacter ] = useState({});
  let { id } = useParams();
  let isLoading = false

  useEffect(() => {
    isLoading = true
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(
        ({ data }) => {
          if (data.name) {
            setCharacter(data)
          } else {
            window.alert("No hay personajes con ese ID")
          }
        }
      )
      isLoading = false
      return setCharacter({})
  }, [id]);

  if (isLoading) {
    return <h3>Cargando</h3>
  }

  return (
    <div >
      <img src={character.image} alt={character.name} />
      <h2>{character.name}</h2>
      <h2>{character.status}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
      {character.origin ? <h2>{character.location.name}</h2>:<h2>Loading</h2>}
    </div>
  )
}

export default Detail