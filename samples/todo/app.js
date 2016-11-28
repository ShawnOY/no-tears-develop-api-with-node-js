'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const app = express()
const appPort = 8080

let tasks = {}

app.use(bodyParser.json())

app.post('/task/add', function (request, response) {
  const taskId = uuid.v4()
  tasks[taskId] = request.body.content

  console.log(tasks)

  response.json({
    message: 'OK',
    taskId: taskId
  })
})

app.get('/task', function (request, response) {
  response.json({
    message: 'OK',
    tasks: tasks
  })
})

app.get('/task/:taskId', function (request, response) {
  response.json({
    message: 'OK',
    task: tasks[request.params.taskId]
  })
})

app.delete('/task/delete', function (request, response) {
  delete tasks[request.body.taskId]

  console.log(tasks)

  response.json({
    message: 'OK'
  })
})

app.listen(appPort, function () {
  console.log('Start Service')
})
