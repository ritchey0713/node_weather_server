const express = require('express')

const app = express()

app.get("", (req, resp) => {
  resp.send("test")
})

app.get("/help", (req, resp) => {
  resp.send("Help page")
})

app.get("/about", (req, resp) => {
  resp.send("about page")
})

app.get("/weather", (req, resp) => {
  resp.send("weather")
})


app.listen(3000, () => {
  console.log('Server booted!')
})