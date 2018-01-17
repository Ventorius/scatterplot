const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.get('/plotpoints', (req, res) => {

  let plotPoints
  fs.readFile('data.json', (err, data) => {
  if (err) {
    return res.status(404)
  }
  plotPoints = JSON.parse(data)
  res.status(200).json(plotPoints)
})
})

app.listen(PORT, () => {
  console.log('Server launched successfully')
})