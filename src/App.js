import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import ErrorComponent from './components/Error/ErrorComponent';
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';

function App() {

   const [ access, setAccess ] = useState(false)
   let EMAIL = "login@henry.com";
   let PASSWORD = "password1";

   const navigate = useNavigate()
   
   const login = (userData) => {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true)
         navigate("/home")
      } else {
         alert("Datos incorrectos!")
      }
   }

   const logout = () => {
      setAccess(false)
      navigate("/")
   }

   useEffect(() => {
      !access && navigate("/")
   }, [access]);
   
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
   const location = useLocation()
   console.log(location.pathname);

   return (
      <div className='App'>
         { location.pathname !== "/" ? <Nav onSearch={onSearch} randomCharacter={getRandomCharacter} logout={logout} /> : <h2>Inicie sesión para continuar</h2>}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onSearch={onSearch} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
         </Routes>
      </div>
   );
}

export default App;
