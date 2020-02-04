const request = require("request")

const forecast = (longitude, latitude, callback) => {
  const url = `https://api.darksky.net/forecast/9c0eb2fc8b0d0c20e73315c147dc71f8/${latitude},${longitude}`
  request({ url, json:true }, (err, { body }) => {
    if(err) {
      callback("couldnt connect to service", undefined)
    } else if (body.error) {
      callback("cannot find location", undefined)
    } else {
      callback(undefined, 
        // temperature: body.currently.temperature,
        // chanceOfRain: body.currently.precipProbability
        `${body.daily.data[0].summary}. It is currently ${body.currently.temperature}. With a ${body.currently.precipProbability} chance of rain.`
      )
    }
  })
}
module.exports = forecast