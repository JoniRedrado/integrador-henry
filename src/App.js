//REACT
import { useState, useEffect } from 'react';
//React-Router-Dom
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//AXIOS
import axios from 'axios';

//COMPONENTS
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About';
import ErrorComponent from './components/Error/ErrorComponent';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites.jsx';

//CSS
import './App.css';


function App() {

   //LOGIN
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

   //LOGOUT
   const logout = () => {
      setAccess(false)
      navigate("/")
   }

   //Check LogIn
   useEffect(() => {
      !access && navigate("/")
   }, [access]);
   
   //Estados Personajes
   const [ characters, setCharacters ] = useState([])

   //Funcion Buscar Personajes
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

   //Funcion Eliminar Personaje
   const onClose = (id) => {
      const parsedId = parseInt(id)
      const newCharacters = characters.filter(character => character.id !== parsedId)
      setCharacters(newCharacters)
   }


   //Funcion Obtener Personaje Random
   const getRandomCharacter = () => {
      const randomId = Math.ceil(Math.random()*826)
      onSearch(randomId)
   }

   const location = useLocation()

   return (
      <div className='App'>
         { location.pathname !== "/" ? <Nav onSearch={onSearch} randomCharacter={getRandomCharacter} logout={logout} /> : <></>}
         <Routes>
            <Route path="/" element={<Form login={login} />} />
            <Route path='/home' element={<Cards characters={characters} onSearch={onSearch} onClose={onClose}/>}/>
            <Route path='/about' element={<About />}/>
            <Route path='/detail/:id' element={<Detail />}/>
            <Route path='/favorites' element={<Favorites onClose={onClose}/>}/>
         </Routes>
      </div>
   );
}

export default App;
