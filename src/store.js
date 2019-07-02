import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import animalsReducer from './reducers/animalsReducer';
import { loadState, saveState } from './persistState';

// Only enable redux dev tools if environment is not production
console.log(process.env.REACT_APP_NODE_ENV);
console.log(process.env.REACT_APP_NODE_ENV !== 'production' && window);
const composeEnhancers = process.env.REACT_APP_NODE_ENV !== 'production' && window ? 
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

const enhancer = composeEnhancers(
    applyMiddleware(
        thunkMiddleware
    )
);

const rootReducer = combineReducers({
    animals: animalsReducer
});

const persistedState = loadState();

// We create the store and 
const store = createStore(
    rootReducer,
    persistedState,
    enhancer
);

/* Check for changes in the store so we save them to the localStorage */
store.subscribe(() => {
    saveState({
        animals: store.getState().animals
    });
});

export default store;

