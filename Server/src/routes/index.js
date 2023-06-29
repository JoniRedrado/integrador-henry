const {getCharById} = require("../controllers/getCharById")
const {login} = require("../controllers/login")
const {postFav, deleteFav} = require("../controllers/handleFavorites")

const { Router } = require("express")
const router = Router()

//GET getCharById
router.get("/character/:id", getCharById)

//GET login
router.get("/login", login)

//POST postFav
router.post("/fav", postFav)

//DELETE deleteFav
router.delete("/fav/:id", deleteFav)


module.exports = {router}