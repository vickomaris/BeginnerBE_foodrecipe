/* eslint-disable camelcase */

const db = require('../config/db')

const userModel = {
  // router list
  selectAll: (limit, offset) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_users ORDER BY name ASC LIMIT ${limit} OFFSET ${offset}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // lihat data by id
  selectDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // lihat data by title
  selectDetailName: (name) => {
    return new Promise((resolve, reject) => {
      db.query(`SELECT * FROM tb_users WHERE name LIKE '%${name}%'`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  },
  // update
  update: (id, name, email, phone, password, created_at) => new Promise((resolve, reject) => {
    db.query(`UPDATE tb_users SET name = '${name}', email = '${email}', phone = '${phone}', password = '${password}', created_at = '${created_at}'  WHERE id = ${id}`, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  }),

  // router insert
  store: (id, name, email, phone, password, created_at) => {
    return new Promise((resolve, reject) => {
      db.query(`INSERT INTO tb_users (id, name, email, phone, password, created_at) VALUES (${id}, '${name}', '${email}', '${phone}', '${password}', '${created_at}')`,
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
      db.query(`DELETE FROM tb_users WHERE id=${id}`, (err, res) => {
        if (err) {
          reject(err)
        }
        resolve(res)
      })
    })
  }
}

module.exports = userModel
