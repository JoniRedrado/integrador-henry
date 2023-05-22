import React from 'react'
import { useState } from 'react'
import {formValidation} from '../../validation'


const Form = ({login}) => {

  const [ userData, setUserData ] = useState({
    email: "",
    password: "",
  })

  const [ errors, setErrors ] = useState({})

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

  const handleSubmit = (e) => {
    e.preventDefault()
    login(userData)
  }


  return (
    <form>
      <label>Email:</label>
      <input type='text' name='email' value={userData.email} onChange={handleChange}/>
      <label>Password:</label>
      <input type='password' name='password' value={userData.password} onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default Form