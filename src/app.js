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
  resp.send("<h1>This is a help page</h1>")
})

app.get("/weather", (req, resp) => {
  resp.send({
    forecast: "forecast",
    location: "the location"
  })
})


app.listen(3000, () => {
  console.log('Server booted!')
})