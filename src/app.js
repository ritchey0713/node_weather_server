const express = require('express')
const path = require("path")
const hbs = require("hbs")

const app = express()

// define paths for express config
const publicPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

// hbs setup and views location 
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//set up dir to serve
app.use(express.static(publicPath))

//routes 
app.get("", (req, resp) => {
  resp.render('index', {
    title: "weather app",
    name: "Dj"
  })
})

app.get("/help", (req, resp) => {
  resp.render("help", {
    title: "Help page",
    content: "Please reach out with any issues",
    name: "Dj"
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

app.get("*", (req, resp) => {
  resp.render("404", {

  })
})



// port to use
app.listen(3000, () => {
  console.log('Server booted!')
})