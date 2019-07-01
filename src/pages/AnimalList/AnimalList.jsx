import React, { Component } from 'react';
import { getAnimals } from '../../services/api';
import AnimalCards from '../../components/AnimalCards';
import './AnimalList.scss';

class AnimalList extends Component {
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
            <div className="animals-container">
                <h1 className="main-title">Animals Available For Adoption</h1>
                {this.state.animals.length > 0 && <AnimalCards animals={this.state.animals} />}
            </div>
        );
    }
}

export default AnimalList;
