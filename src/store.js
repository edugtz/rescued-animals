import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import animalsReducer from './reducers/animalsReducer';

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


const store = createStore(
    rootReducer,
    enhancer
);

export default store;

