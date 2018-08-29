const express = require('express')
const app = express()
const { layout, instructorUL } = require('./templates')
const instructors = require('./instructors.json')

app.get('/', async (req, res, next) => {
  res.send(layout(instructorUL(instructors)))
})

app.listen(3000, (err) => {
  if (err) throw err;
  console.log('listening on port 3000')
})
