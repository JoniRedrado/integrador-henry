const {User} = require('../DB_connection')

const postUser = async (req, res) => {
  try {
    const {id, email, password} = req.body
    if (!id || !email || !password ) res.status(400).send("Faltan datos")

  
    const user = await User.findOrCreate({
      where: {id: id,email: email, password: password}
    })
    
    res.status(200).json(user)
    
  } catch (error) {
    
    res.status(500).send(error)
  }

}

module.exports = {postUser}