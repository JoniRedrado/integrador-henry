//REACT
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//CSS
import styles from './Card.module.css'
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import { ADD_FAV, REMOVE_FAV } from '../../redux/actions';

export default function Card(props) {
   //PROPS
   const { id, name, status, species, gender, origin, image, character, onClose} = props
   
   //REDUX
   const myFavorites = useSelector(state=>state.myFavorites)
   const dispatch = useDispatch()
   
   //HANDLE FAVORITE
   const [ isFav, setIsFav ] = useState(false)
   const handleFavorite = ()=>{
      if ( isFav) {
         setIsFav(false)
         dispatch({type: REMOVE_FAV, payload: id})
      } else {
         setIsFav(true)
         dispatch({type: ADD_FAV, payload: character})
      }
   }

   useEffect(()=>{
      for (let index = 0; index < myFavorites.length; index++) {
         if(myFavorites[index].id === id){
            setIsFav(true)
         }
      }

   },[myFavorites])

   return (
      <div className={styles.card}>
         <img src={image} alt={name} />
         <Link className={styles.link} to={`/detail/${id}`}>
            {name}
         </Link>
         <p>{status}</p>
         <p>{species}</p>
         <p>{gender}</p>
         <p>{origin}</p>
         {
            isFav ? (
               <button className={styles.fav} onClick={handleFavorite}>🗑️</button>
               ) : (<>
                  <button className={styles.remove} onClick={ () => onClose(id) }>X</button>
                  <button className={styles.fav} onClick={handleFavorite}>❤️</button>
               </>
            )
         }
      </div>
   );
}
