const express = require("express")
const UserController = require("../controllers/UserController")
const router = express.Router()
const {authentication} = require('../middleware/authentication')



router.post("/create",UserController.create)
router.delete("/id/:id",authentication, UserController.delete)
router.post('/login',UserController.login)
// router.get('/',authentication,UserController.getAll)
// router.put('/:id',authentication,UserController.update)  
router.delete("/logout", authentication, UserController.logout)
router.get("/getInfo", authentication, UserController.getInfo)


module.exports = router