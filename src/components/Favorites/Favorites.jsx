//REACT
import React, { useEffect, useState } from 'react'
//COMPONENTS
import Card from '../Card/Card'
//REDUX
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
//CSS
import styles from '../Cards/Cards.module.css'

const Favorites = (props) => {

  const [aux, setAux] = useState(false)

  const allCharacters = useSelector(state=>state.allCharacters)
  const myFavorites = useSelector(state=>state.myFavorites)
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log(myFavorites);
    
  },[myFavorites])

  const handleOrder = (e)=>{
    console.log(e.target.value);
    dispatch(actions.orderCards(e.target.value))
    setAux(!aux)
  }
  const handleFilter = (e)=>{    
    console.log(e.target.value);
    dispatch(actions.filterCards(e.target.value))
  }

  return (
    <>
      <select onChange={handleOrder}>
        <option value="" selected disabled hidden>Orden:</option>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="" selected disabled hidden>Género:</option>
        <option value="All">All</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>
      </select>
      <div className={styles.cards__container}>
        {myFavorites.map((fav)=>{
          return <Card 
          key={fav.id}
          id={fav.id}
          name={fav.name}
          status={fav.status}
          species={fav.species}
          gender={fav.gender}
          origin={fav.origin.name}
          image={fav.image}
          onClose={props.onClose}
          />
        })}
      </div>
    </>
  )
}

export default Favorites