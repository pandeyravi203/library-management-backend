const express = require('express')
const router = express.Router()
const User=require('../../models/user')
router.post('/', (req, res) => {

  const user = new User(req.body)
  user.save().then((user) => {
    return res.send(user)
  })

})
module.exports = router