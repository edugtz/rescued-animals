import api from 'axios';
require('dotenv').config();

const mainUrl = process.env.REACT_APP_API || 'http://localhost:8080/api';
console.log('HERE');
console.log(mainUrl);

const routes = {
    GET_ANIMALS: mainUrl + '/animals'
};

export const getAnimals = () => {
    return api.get(routes.GET_ANIMALS);
};