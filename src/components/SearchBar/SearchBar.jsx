import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [ id, setId ] = useState("")

   const handleChange = (e) => {
      setId(e.target.value)
   }

   return (
      <div className={styles.searchBar}>
         <input type='search' onChange={handleChange} value={id}/>
         <button onClick={()=> props.onSearch(id)}>Agregar</button>
      </div>
   );
}
