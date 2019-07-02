const initialState = {
    animalList: []
};
  
export default function animalsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_ANIMAL_LIST':
            return {
                ...state,
                animalList: action.animals
            };
        default:
            return state;
    }
};