var axios = require('axios');

const Location = (lat,lon,next) => {
  axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lon+"&key=AIzaSyDjX_KYU5KiAQ-sb2nYKl4umoILgvWZO50").then((data)=>next(this.data))
}

module.exports = Location
