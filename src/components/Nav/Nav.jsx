import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'

import styles from './Nav.module.css'
import logo from '../../assets/bg3.png'

const Nav = (props) => {

  return (
    <nav className={styles.nav__container}>
      <img src={logo} className={styles.img} alt='logo'/>
      <Link to={'/home'} className={styles.link}>
        Home
      </Link>
      <Link to={'/about'} className={styles.link}>
        About
      </Link>
      {/* El boton de RandomCharacter hay que moverlo al componente CARDS! */}
      <p onClick={props.randomCharacter} className={styles.link}>Get random character!</p>
      <SearchBar onSearch={props.onSearch} />
      <button onClick={props.logout}>LOGOUT</button>
    </nav>
  )
}

export default Nav