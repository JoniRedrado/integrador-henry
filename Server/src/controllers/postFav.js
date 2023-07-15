const {Favorite} = require('../DB_connection')

const postFav = async (req,res) => {
  const { id, name, origin, status, image, species, gender } = req.body

  if ( !id || !name || !origin || !status || !image || !species || !gender ) res.status(401).send("Faltan datos")
  
  try {
    
    await Favorite.findOrCreate({
      where: {id},
      defaults : { name, origin, status, image, species, gender }
    })
    
    const favorites = await Favorite.findAll()
    res.status(200).json(favorites)

  } catch (error) {
    res.status(500).json(error)
    
  }
}

module.exports = {postFav}