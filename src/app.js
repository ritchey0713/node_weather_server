const express = require('express')
const path = require("path")

const app = express()

// define paths for express config
const publicPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates")

// hbs setup and views location 
app.set("view engine", "hbs")
app.set("views", viewsPath)

//set up dir to serve
app.use(express.static(publicPath))

//routes 
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



// port to use
app.listen(3000, () => {
  console.log('Server booted!')
})