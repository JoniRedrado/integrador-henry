import React from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'


const Nav = (props) => {

  return (
    <nav>
      <button onClick={props.randomCharacter}>Get random character!</button>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  )
}

export default Nav