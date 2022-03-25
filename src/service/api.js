const axios = require('axios').default;

const StrapiClient = axios.create({
    baseURL: 'http://savia-web-backend.herokuapp.com/api',
    params: {
        populate: '*'
    }
});

async function getAllVarieties () {
    const response = await StrapiClient.get('/variedads');
    return response.data;
}

async function getVariety (id) {
    const response = await StrapiClient.get(`/variedads/${id}`);
    return response.data;
}

async function getCarouselSlides () {
    const response = await StrapiClient.get('/carrusel-slides');
    return response.data;
}

async function getProductCarouselSlides () {
    const response = await StrapiClient.get('/carrusel-productos-slides');
    return response.data;
}

module.exports = {
    getAllVarieties,
    getVariety,
    getCarouselSlides,
    getProductCarouselSlides,
}

