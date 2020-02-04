console.log("hello")

// fetch("http://localhost:3000/weather?address=columbus")
//   .then((resp) => {
//    return resp.json()
//   }).then((data) => {
//     console.log(data)
//   }).catch((err) => {
//     console.log(err)
//   })

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()

})