const {getCharById} = require("../controllers/getCharById")
const {login} = require("../controllers/login")
const {deleteFav} = require('../controllers/deleteFav')
const {postFav} = require('../controllers/postFav')
const {postUser} = require('../controllers/postUser')

const { Router } = require("express")
const router = Router()

//GET getCharById
router.get('/character/:id', getCharById)

//GET login
router.get("/login", login)

//POST postUser
router.post("/login", postUser)

//POST postFav
router.post("/fav", postFav)

//DELETE deleteFav
router.delete("/fav/:id", deleteFav)


module.exports = {router}