/* eslint-disable camelcase */
const commentModel = require('../model/comment.model')

const commentController = {
  list: (req, res) => {
    const page = parseInt(req.query.page) || 1
    const limit = parseInt(req.query.limit) || 5
    const offset = (page - 1) * limit
    commentModel.selectAll(limit, offset)
      .then((result) => {
        res.json(result)
      }).catch((err) => {
        res.json(err)
      })
  },
  join3: (req, res) => {
    commentModel.commentJoin()
      .then((result) => {
        res.json(result)
      }).catch((err) => {
        res.json(err)
      })
  },
  insert: (req, res) => {
    const { id, id_user, id_recipe, comments, created_at } = req.body
    commentModel.store(id, id_user, id_recipe, comments, created_at).then((result) => {
      res.json(result)
    }).catch((err) => {
      res.json(err)
    })
  },
  destroy: (req, res) => {
    const { id } = req.params
    commentModel.destroy(id).then((result) => {
      res.json({
        message: 'success delete data',
        data: result
      })
    }).catch((err) => {
      res.json(err)
    })
  }
}

module.exports = commentController
