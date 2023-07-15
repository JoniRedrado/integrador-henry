const {User} = require('../DB_connection')

const login = async (req,res)=>{
  const {email, password} = req.query
  if ( !email || !password ) res.status(400).send("Faltan datos")

  try {
    const user = await User.findOne({where:{email}})
    
    if( user === null ) res.status(404).send("Usuario no encontrado")
    if( user.password !== password) res.status(403).send("Contraseña incorrecta")
    if( user.password === password) res.status(200).json({access: true})
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {login}