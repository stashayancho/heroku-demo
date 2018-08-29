const Sequelize = require('sequelize')
const dbUrl = process.env.DATABASE_URL || 'postgres://localhost:5432/heroku-demo'
const db = new Sequelize(dbUrl, { logging: false })

const Instructor = db.define('instructor', {
  name: Sequelize.STRING,
  profilePic: Sequelize.STRING
})

module.exports = { db, Instructor }
