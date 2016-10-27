'use strict'

const express = require('express')
const app = express()

const quotes = {
  Eng: [
    'The value of a man resides in what he gives and not in what he is capable of receiving.',
    'The mass of a body is a measure of its energy content.',
    'Anyone who has never made a mistake has never tried anything new.'
  ],
  Zh: [
    '一個人的價值，在於他貢獻了什麼，而不在於他能得到什麼。',
    '一個物體的質量就是其所含能量的度量單位。',
    '一個從未犯錯的人是因為他不曾嘗試新鮮事物。'
  ]
}

app.get('/quote/get', function (request, response) {
  if (!quotes[request.query.language]) return response.send('Language is not valide')

  response.send(quotes[request.query.language][Math.round(Math.random() * 2)])
})

app.listen(8080, function () {
  console.log('Server is started')
})
