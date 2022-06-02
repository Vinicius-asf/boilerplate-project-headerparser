const express = require('express')
const router = express.Router()

const whoamiRouter = require('./whoami')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.use("/whoami",whoamiRouter)

module.exports = router