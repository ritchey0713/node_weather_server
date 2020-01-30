const express = require('express')

const app = express()

app.get("", (req, resp) => {
  resp.send("test")
})

app.listen(3000, () => {
  console.log('Server booted!')
})