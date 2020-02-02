const express = require('express')
const path = require("path")



// console.log(__dirname)

const publicPath = path.join(__dirname, "../public")

const app = express()
app.set("view engine", "hbs")
app.use(express.static(publicPath))


app.get("", (req, resp) => {
  resp.render('index', {
    title: "weather",
    name: "Dj"
  })
})

app.get("/help", (req, resp) => {
  resp.render("help", {
    title: "Help page",
    content: "Please reach out with any issues"
  })
})

app.get("/about", (req, resp) => {
  resp.render("about", {
    title: "About us",
    name: "Dj"
  })
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