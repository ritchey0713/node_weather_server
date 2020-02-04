const baseURL = "http://localhost:3000/weather"

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")

const fetchWeather = async(location) => {
    let resp = await fetch(`${baseURL}?address=${location}`)
    return await resp.json()
}

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const location = search.value
  fetchWeather(location)
    .then(data => console.log(data))
})