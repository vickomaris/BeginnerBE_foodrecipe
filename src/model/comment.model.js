/* eslint-disable camelcase */

const db = require('../config/db')

const commentModel = {
  // router list = liat is data di tb
  selectAll: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_comment ORDER BY id ASC LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // join 3 table
  commentJoin: () => {
    return new Promise((resolve, reject) => {
      db.query('select tb_users.name, tb_recipe.title, tb_recipe.photo, tb_comment.comments from tb_comment inner join tb_recipe on tb_recipe.id = tb_comment.id_recipe inner join tb_users on tb_users.id = tb_comment.id_user;', (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // router insert
  store: (id, id_user, id_recipe, comments, created_at) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tb_comment (id, id_user, id_recipe, comments, created_at) VALUES (${id}, '${id_user}', '${id_recipe}', '${comments}', '${created_at}')`,
        (err, res) => {
          if (err) {
            reject(err)
          }
          resolve(res)
        })
    })
  },

  // delete by id
  destroy: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`DELETE FROM tb_comment WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}

module.exports = commentModel
