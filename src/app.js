const express = require('express')
const path = require("path")



// console.log(__dirname)

const publicPath = path.join(__dirname, "../public")

const app = express()
app.set("view engine", "hbs")
app.use(express.static(publicPath))

// some nonsense stuff here


app.get("/help", (req, resp) => {
  
})

// app.get("/about", (req, resp) => {
//   resp.send("<h1>This is a help page</h1>")
// })

app.get("/weather", (req, resp) => {
  resp.send({
    forecast: "forecast",
    location: "the location"
  })
})


app.listen(3000, () => {
  console.log('Server booted!')
})