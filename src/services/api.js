import api from 'axios';
require('dotenv').config();

const mainUrl = process.env.REACT_APP_API || 'http://localhost:8080/api';

const routes = {
    ANIMALS: mainUrl + '/animals'
};

export const getAnimals = () => {
    return api.get(routes.ANIMALS);
};

export const getAnimal = (animalId) => {
    return api.get(`${routes.ANIMALS}/${animalId}`);
};

export const registerAnimal = (animalData) => {
    return api.post(routes.ANIMALS, animalData);
};

export const deleteAnimal = (animalId) => {
    return api.delete(`${routes.ANIMALS}/${animalId}`);
};

export const updateAnimal = (animalId, updatedAnimalData) => {
    return api.put(`${routes.ANIMALS}/${animalId}`, updatedAnimalData);
};