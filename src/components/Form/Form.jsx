//React
import React, { useState } from 'react'
//Assets
import {formValidation} from '../../validation'
//CSS
import styles from './Form.module.css'

const Form = ({login}) => {

  //Estados DATA y ERRORS
  const [ userData, setUserData ] = useState({
    email: "",
    password: "",
  })
  const [ errors, setErrors ] = useState({})


  //Funcion HandleChange
  const handleChange = (e) => {
    setUserData({...userData, [e.target.name]: e.target.value})
    setErrors(
      formValidation(
        {
          ...userData,
          [e.target.name]: e.target.value,
        }
      ))
  }
  //Funcion SUBMIT  
  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }


  return (
    <main className={styles.login}>
      <span className={styles.login__title}>Welcome to my Rick & Morty app!</span>
      <div className={styles.form__container}>
        <span>Log in to continue</span>
        <form>
          <label>Email:</label>
          <input type='text' name='email' value={userData.email} onChange={handleChange}/>
          <label>Password:</label>
          <input type='password' name='password' value={userData.password} onChange={handleChange}/>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </main>
  )
}

export default Form