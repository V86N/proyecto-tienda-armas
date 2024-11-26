const express = require("express")
const router = express.Router()
const OrderController = require("../controllers/OrderCrontroller")
const { authentication } = require("../middleware/authentication")

router.post("/create",authentication, OrderController.create)
router.get("/getAll", OrderController.getAll)

module.exports = router