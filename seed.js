const instructors = require('./instructors.json')
const { db, Instructor } = require('./models')

const seed = async () => {
  await db.sync({ force: true })
  await Instructor.bulkCreate(instructors)
  db.close()
}

seed()
