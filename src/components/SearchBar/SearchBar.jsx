import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [ id, setId ] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   const fn = () => {
      props.onSearch(id)
      setId("")
   }

   return (
      <div className={styles.searchBar}>
         <input id='input-id' type='search' onChange={handleChange} value={id}/>
         <button onClick={fn}>Agregar</button>
      </div>
   );
}
