const axios = require('axios').default;

const StrapiClient = axios.create({
    baseURL: 'http://localhost:1337/api'
});

async function getAllVarieties () {
    const response = await StrapiClient.get('/variedads');
    console.log(response.data.data);
    return response.data.data.data;
}

async function getVariety (id) {
    const response = await StrapiClient.get(`/variedads/${id}`);
    console.log(response.data.data);
    return response.data.data;
}

module.exports = {
    getAllVarieties,
    getVariety
}

