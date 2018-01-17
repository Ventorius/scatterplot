const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.get('/plotpoints', (req, res) => {

  fs.readFile('data.json', (err, data) => {
    if (err) {
      return res.status(404)
    }

    let plotPoints = JSON.parse(data)
      .sort((a, b) => new Date(a.start_time) - new Date(b.start_time))

    if (req.query.from && req.query.to) {
      const {from, to} = req.query
      plotPoints = plotPoints.filter((item) => new Date(item.start_time) > new Date(from) && new Date(item.start_time) < new Date(to))
    }

    if (req.query.from) {
      const {from} = req.query
      plotPoints = plotPoints.filter((item) => new Date(item.start_time) > new Date(from))

    }

    if (req.query.to) {
      const {to} = req.query
      plotPoints = plotPoints.filter((item) => new Date(item.start_time) < new Date(to))

    }

    res.status(200).json(plotPoints)
  })
})

app.listen(PORT, () => {
  console.log('Server launched successfully')
})