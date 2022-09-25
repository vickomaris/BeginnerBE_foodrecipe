/* eslint-disable camelcase */
const userModel = require('../model/user.model')

const userController = {
  list: (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const offset = (page - 1) * limit
    userModel.selectAll(limit, offset)
      .then((result) => {
        res.json(result)
      }).catch((err) => {
        res.json(err)
      })
  },
  detail: (req, res) => {
    const id = req.params.id
    userModel.selectDetail(id).then((result) => {
      res.json(result.rows)
    }).catch((err) => {
      res.json(err)
    })
  },
  detailName: (req, res) => {
    const name = req.params.name
    userModel.selectDetailName(name).then((result) => {
      res.json(result.rows)
    }).catch((err) => {
      res.json(err)
    })
  },
  insert: (req, res) => {
    const { id, name, email, phone, password, created_at } = req.body
    userModel.store(id, name, email, phone, password, created_at).then((result) => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
  },
  update: (req, res) => {
    const { name, email, phone, password, created_at } = req.body
    const id = req.params.id
    userModel.update(id, name, email, phone, password, created_at).then((result) => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
  },
  destroy: (req, res) => {
    const { id } = req.params
    userModel
      .destroy(id)
      .then((result) => {
        res.json({
          message: 'success delete data',
          data: result
        })
      }).catch((err) => {
        res.json(err)
      })
  }
}

module.exports = userController
