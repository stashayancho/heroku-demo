const layout = (content) => `
<html>
  <head>
    <title>Heroku Demo</title>
    <style>
      ul { display: flex; }
      li { text-align: center; list-style: none; width: 150px; }
      img { height: 150px; }
    </style>
  </head>
  <body>${content}</body>
</html>
`

const instructorUL = (instructors) => `
  <ul class='instructor-list'>
  ${ instructors.map(instructorLI).join('') }
  <ul>
`

const instructorLI = (instructor) => `
  <li class='instructor'>
    <img src='${instructor.profilePic}' />
    <p>${instructor.name}</p>
  </li>
`

module.exports = { layout, instructorUL }
