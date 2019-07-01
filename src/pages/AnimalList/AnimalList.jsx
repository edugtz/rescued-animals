import React, { Component } from 'react';
import { getAnimals } from '../../services/api';
import AnimalCards from '../../components/AnimalCards';
import './AnimalList.scss';

class AnimalList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animals: [],
            updatedAnimals: false
        };
    };

    componentDidMount() {
        return getAnimals()
            .then(response => {
                this.setState({ animals: response.data, updatedAnimals: true })
            })
            .catch(err => {
                console.log(err.message);
            });
    };
    
    render() {
        const { updatedAnimals, animals } = this.state;
        return(
            <div className="animals-container">
                {(updatedAnimals && animals.length === 0) && 
                    <div>
                        <h1 className="main-title">We are sorry, we currently dont have animals available for adoption</h1>
                    </div>
                }
                {(updatedAnimals && animals.length > 0) && 
                    <div>
                        <h1 className="main-title">Animals Available For Adoption</h1>
                        <AnimalCards animals={animals} />
                    </div>
                }
            </div>
        );
    }
}

export default AnimalList;
