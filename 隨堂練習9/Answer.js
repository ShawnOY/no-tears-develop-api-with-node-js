'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
let books = {}

app.use(bodyParser.json())

app.route('/book')
  .get(function (request, response) {
    response.json(books)
  })
  .post(function (request, response) {
    books[request.body.isbn] = {
      name: request.body.name,
      author: request.body.author,
      price: request.body.price
    }

    response.json({message: 'Success'})
  })

app.listen(8080, function () {
  console.log('Server is started')
})
