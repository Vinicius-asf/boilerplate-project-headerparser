const express = require('express')
const router = express.Router()

// const {getController} = require('./controllers/get')

router.get("/",(req,res)=>res.json({"who":"me"})) // modify when controller is finished

module.exports = router