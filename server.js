const express = require('express')
const app = express()
const { layout, instructorUL } = require('./templates')
const instructors = require('./instructors.json')
const PORT = process.env.PORT || 3000

app.get('/', async (req, res, next) => {
  res.send(layout(instructorUL(instructors)))
})

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('listening on port 3000')
})
