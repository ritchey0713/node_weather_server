const baseURL = "/weather"

const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const msgOne = document.querySelector('#msg-one')
const msgTwo = document.querySelector('#msg-two')

const fetchWeather = async(location) => {
    let resp = await fetch(`${baseURL}?address=${location}`)
    return await resp.json()
}

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault()
  const location = search.value
  msgOne.textContent = "Loading..."
  msgTwo.textContent = ""
  
    fetchWeather(location)
    .then((data) => {
      try {
        if(data.error) {
          throw "Location not found, please try another"
        }
        msgOne.textContent = data.location
        msgTwo.textContent = data.forecast

      }catch(err){
        msgOne.textContent = err
        msgTwo.textContent = ""
      }
    })
    .catch((err) => {
      console.log(err)
    })
  
})