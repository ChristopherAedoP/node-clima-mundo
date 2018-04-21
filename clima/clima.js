const axios = require('axios');


const getclima = async(lat, lng) => {

    // let encodedURL = encodeURI(direccion);
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3c61816650461c0b10f0c8868767d43b`

    let res = await axios.get(`${url}`);

    // console.log(res.data.main.temp);
    // if (res.data.status === 'ZERO_RESULTS') {
    //     throw new Error(`No hay resultados para al cuidad ${direccion}`)
    // }

    // let location = res.data.results[0];
    // let coordenadas = location.geometry.location;

    return res.data.main.temp
}

module.exports = {
    getclima
}