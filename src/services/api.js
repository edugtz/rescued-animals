import api from 'axios';

const mainUrl = 'http://localhost:8080/api';

const routes = {
    GET_ANIMALS: mainUrl + '/animals'
};

export const getAnimals = () => {
    return api.get(routes.GET_ANIMALS);
};