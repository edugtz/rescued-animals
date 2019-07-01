import React from 'react';
import Header from '../../components/Header';
import Dashboard from '../../components/Dashboard';
import './AnimalList.scss';

function AnimalList() {
  return (
        <div className="main-app-wrapper">
            <div className="container">
                <Header />
            </div>
            <div className="main-content-container">
                <Dashboard />
            </div>
        </div>
  );
}

export default AnimalList;
