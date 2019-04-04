const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=75b736835a55108e85e2ec8945c0e7f7&units=metric`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}