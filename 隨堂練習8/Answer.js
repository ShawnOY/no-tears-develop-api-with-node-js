'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const prize = [
  'Banana',
  'Apple',
  'Tomato',
  'Kiwi'
]
let users = {}

app.use(bodyParser.json())

app.get('/user/list', function (request, response) {
  if (!(request.query.secret === 'LetMePass')) return response.send('You can not pass')

  response.send(JSON.stringify(users))
})

app.get('/user', function (request, response) {
  const account = users[request.query.account]

  if (!account) return response.send('No Permission')
  if (account.password !== request.query.password) return response.send('No Permission')

  response.send(JSON.stringify(account))
})

app.post('/user', function (request, response) {
  users[request.body.account] = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email,
    password: request.body.password
  }

  response.send('User is created')
})

app.get('/gacha', function (request, response) {
  if (Math.round(Math.random() * 100) >= 70) return response.send('You are not lucky')

  const reward = prize[Math.round(Math.random() * 3)]

  response.send('Your prize is ' + reward)
})

app.listen(8080, function () {
  console.log('Server is started')
})
