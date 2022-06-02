const express = require('express')
const router = express.Router()

const { getController } = require('./controllers/get')

router.use("/",getController) // modify when controller is finished

module.exports = router