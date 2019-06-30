import React, { Component } from 'react';
import './Dashboard.scss';
import { getAnimals } from '../../services/api';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: []
        };
    };

    componentDidMount() {
        return getAnimals()
            .then(response => {
                this.setState({ animals: response.data })
            })
            .catch(err => {
                console.log(err.message);
            });
    };
    
    render() {
        return(
            <div className="dashboard-wrapper">
                <h1 className="main-title">Animalitos</h1>
                {this.state.animals.length > 0 && this.state.animals.map(animal => {
                    return (
                        <div key={`${animal.id} - ${animal.name}`}>
                            <h2>{animal.name}</h2>
                            <img src={animal.animalDetail.picture} alt={`${animal.name}`} />
                        </div>
                    );
                })}
            </div>
        );
    }
};

export default Dashboard;