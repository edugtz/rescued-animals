import { getAnimals } from '../services/api';

const getAnimalList = animals => ({
    type: 'GET_ANIMAL_LIST',
    animals
});

export const getAnimalsData = () => {
    return dispatch => {
        return getAnimals()
            .then(response => {
                dispatch(getAnimalList(response.data));
                
                return response;
            })
            .catch(err => {
                console.log(err);
            });
    };
};