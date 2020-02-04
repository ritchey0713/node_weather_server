console.log("hello")

fetch("http://localhost:3000/weather?address=columbus")
  .then((resp) => {
   return resp.json()
  }).then((data) => {
    console.log(data)
  }).catch((err) => {
    console.log(err)
  })