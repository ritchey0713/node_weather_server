const express = require('express')

const app = express()

app.get("", (req, resp) => {
  resp.send("<h1>Weather App</h1>")
})

app.get("/help", (req, resp) => {
  resp.send({
    name: "Dj",
    age: 29
  })
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