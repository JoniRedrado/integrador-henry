import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import ErrorComponent from './components/Error/ErrorComponent';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Detail from './components/Detail/Detail';

function App() {
   
   const [ characters, setCharacters ] = useState([])

   const onSearch = (id) => {
      var repeated = false

      characters.forEach( (char) => {
         const parsedId = parseInt(id)
         if(char.id === parsedId){
            repeated = true
            return(alert('Ese personaje ya esta ingresado!'))
         }
      })

      if (!repeated) {
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then( (data) => {
            if (data.data.name) {
               setCharacters( (oldChars) => [...oldChars, data.data])
            } else {
               window.alert('¡No hay personajes con este ID!')
            }
         })
      }
   }

   const onClose = (id) => {
      const parsedId = parseInt(id)
      const newCharacters = characters.filter(character => character.id !== parsedId)
      setCharacters(newCharacters)
   }

   const getRandomCharacter = () => {
      const randomId = Math.ceil(Math.random()*826)
      onSearch(randomId)
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} randomCharacter={getRandomCharacter}/>
         <Routes >
            <Route path='/' element={<Cards characters={characters} onSearch={onSearch} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;
