const express = require("express")
const route = express.Router()

const empController = require("../controllers/empController")

route.post("/empSave",empController.empSave)
route.get("/empDisplay",empController.empDisplay)
route.post("/empDelete",empController.empDelete)
route.post("/empSearch",empController.empSearch)
route.post("/empEdit",empController.empEdit)
route.post("/empUpdate",empController.empUpdate)

module.exports = route;