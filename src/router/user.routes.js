const express = require('express')
const { list, detail, insert, update, destroy, detailName } = require('../controller/user.controller')
const router = express.Router()

router
  .get('/user', list)
  .get('/user/:id', detail)
  .post('/user/:name', detailName)
  .post('/user/', insert)
  .put('/user/:id', update)
  .delete('/user/:id', destroy)

module.exports = router
