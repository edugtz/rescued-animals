import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AnimalList from './pages/AnimalList';
import Animal from './pages/Animal';
import Register from './pages/Register';

const Routes = () => {
    return (
        <div className="main-app-wrapper">
            <Header />
            <div className="main-content-container">
                <Switch>
                    <Route exact={true} path="/" component={AnimalList} />
                    <Route path="/register" component={Register} />
                    <Route path="/animal/:id" component={Animal} />
                    {/* <Route exact path="/page-1" component={Testimonial} />
                    <Route exact path="/page-2" component={Configurator} />
                    <Route component={NotFound} /> */}
                </Switch>
            </div>
            <Footer />
        </div>
    );
};

export default Routes;