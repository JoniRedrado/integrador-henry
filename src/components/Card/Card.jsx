import styles from './Card.module.css'

export default function Card(props) {

   const { name, status, species, gender, origin, image, onClose} = props

   return (
      <div className={styles.card}>
         <img src={image} alt={name} />
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <button onClick={onClose}>X</button>
      </div>
   );
}
