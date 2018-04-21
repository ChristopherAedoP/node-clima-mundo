const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    let encodedURL = encodeURI(direccion);
    let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyDXbyBsnId_WtS_P0cRgGDBxSyFvtSUDhA`

    let res = await axios.get(`${url}`);

    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para al cuidad ${direccion}`)
    }

    let location = res.data.results[0];
    let coordenadas = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coordenadas.lat,
        lng: coordenadas.lng
    }
}

module.exports = {
    getLugarLatLng
}