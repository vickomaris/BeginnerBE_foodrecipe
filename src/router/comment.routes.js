const express = require('express')
const { list, insert, destroy, join3 } = require('../controller/comment.controller')
const router = express.Router()

router
  .get('/comment/', list)
  .get('/comment/commentsjoin', join3)
  .post('/comment/', insert)
  .delete('/comment/:id', destroy)

module.exports = router
