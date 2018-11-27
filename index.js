const express = require('express')
const nunjucks = require('nunjucks')
const route = require('./routes')
const app = express()

nunjucks.configure('views', {
  autoescape: true,
  express: app
})


app.get('/minilistSs', route.minilistSs)
app.get('/test', route.test)

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})