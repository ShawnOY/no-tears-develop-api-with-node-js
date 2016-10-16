'use strict'

const http = require('http')
const url = require('url')
const port = 8080
const users = {
  100: {
    firstName: 'Apple',
    lastName: 'Pie'
  },
  200: {
    firstName: 'Banana',
    lastName: 'Milk'
  }
}

http.createServer(function (request, response) {
  const pathName = url.parse(request.url).pathname
  const queryData = url.parse(request.url, true).query

  switch (pathName) {
    case '/user':
      const data = users[queryData.userId] || users

      response.end(JSON.stringify(data))
      break
    default:
      response.end('Error')
  }
}).listen(port, function () {
  console.log('Web server is started!')
})
