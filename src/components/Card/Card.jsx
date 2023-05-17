import { Link } from 'react-router-dom';

import styles from './Card.module.css'

export default function Card(props) {

   const { id, name, status, species, gender, origin, image, onClose} = props

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
         <button onClick={ () => onClose(id) }>X</button>
      </div>
   );
}
