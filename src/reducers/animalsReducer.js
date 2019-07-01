const initialState = {
    animalList: []
};
  
export default function animalsReducer(state = initialState, action) {
    console.log(action.animals);
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