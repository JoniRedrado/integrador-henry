let myFavorites = []

const postFav = (req, res)=>{
  const character = req.body
  myFavorites.push(character)
  return JSON(myFavorites)
}

const deleteFav = (req, res)=>{
  const {id} = req.params
  myFavorites = myFavorites.filter(char=> char.id !== id)
  return JSON(myFavorites)
}

module.exports = {
  postFav, 
  deleteFav
}