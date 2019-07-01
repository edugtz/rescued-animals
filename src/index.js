import React from 'react';
import ReactDOM from 'react-dom';
import AnimalList from './pages/AnimalList/AnimalList';
import * as serviceWorker from './serviceWorker';

// Global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/style.scss';

ReactDOM.render(<AnimalList />, 
    document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
