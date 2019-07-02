import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimalList from './pages/AnimalList';
import Animal from './pages/Animal';
import Register from './pages/Register';
import Manage from './pages/Manage';
import NotFound from './pages/NotFound';

const Routes = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="main-content-container">
                <div className="tracks-container">

                </div>
                <Switch>
                    <Route exact={true} path="/" component={AnimalList} />
                    <Route path="/register" component={Register} />
                    <Route path="/manage" component={Manage} />
                    <Route path="/animal/:id" component={Animal} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default Routes;