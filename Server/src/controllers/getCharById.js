const URL = "https://rickandmortyapi.com/api/character"
const axios = require("axios")

const getCharById = (req, res)=>{

  const { id } = req.params

  console.log(req.params);
  axios(`${URL}/${id}`)
    .then(({data})=>{
      const {id, status, name, species, origin, image, gender} = data

      const character = {id, status, name, species, origin, image, gender}

      return character.name? res.status(200).json(character) : res.status(404).send("Not found")
    })
    .catch(err=>{
      res.status(500).send(err.message)
    })

}

module.exports = {getCharById}