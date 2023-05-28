//REACT
import React, { useEffect } from 'react'
//COMPONENTS
import Card from '../Card/Card'
//REDUX
import { useSelector } from 'react-redux'
//CSS
import styles from '../Cards/Cards.module.css'
const Favorites = (props) => {

  const myFavorites = useSelector(state=>state.myFavorites)
  
  useEffect(()=>{
    console.log(myFavorites);
  })

  return (
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
  )
}

export default Favorites