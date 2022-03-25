const axios = require('axios').default;

const StrapiClient = axios.create({
    baseURL: 'https://savia-web-backend.herokuapp.com/api',
    params: {
        populate: '*'
    }
});

export async function getAllVarieties () {
    const response = await StrapiClient.get('/variedads');
    return response.data;
}

export async function getVariety (id) {
    const response = await StrapiClient.get(`/variedads/${id}`);
    return response.data;
}

export async function getCarouselSlides () {
    const response = await StrapiClient.get('/carrusel-slides');
    return response.data;
}

export async function getProductCarouselSlides () {
    const response = await StrapiClient.get('/carrusel-productos-slides');
    return response.data;
}


