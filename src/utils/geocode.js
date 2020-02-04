const request = require("request")

const geoCode = (address, callback) => {
  if(typeof address === "string"){
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1Ijoicml0Y2hleTA3MTMiLCJhIjoiY2s1d3R3aWpsMXl5ejNlbjF1bHd0NmpnZyJ9.6yEkoOP0k3bDlfm6pI0ZpA`
    request({ url, json: true }, (err, { body })  => {
      if (err) {
        callback("UNABLE TO CONNECT TO LOCATION SERVICES!", undefined)
      } else if (body.features.length < 1) {
        callback("UNABLE TO FIND LOCATION!", undefined)
      } else {
        callback(undefined, {
          latitude: body.features[0].center[0],
          longitude: body.features[0].center[1],
          location: body.features[0].place_name
        })
          
      }
    })

  } else {
    console.log("Please provide a location!")
  }
}

module.exports = geoCode

