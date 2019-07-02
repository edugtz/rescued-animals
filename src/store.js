import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import animalsReducer from './reducers/animalsReducer';
import { loadState, saveState } from './persistState';

const composeEnhancers = process.env.NODE_ENV !== 'production' && window ? 
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

const store = createStore(
    rootReducer,
    persistedState,
    enhancer
);

store.subscribe(() => {
    saveState({
        animals: store.getState().animals
    });
});

export default store;

