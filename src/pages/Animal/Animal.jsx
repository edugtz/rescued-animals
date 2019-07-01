import React, { Component } from 'react';
import { getAnimal } from '../../services/api';
import moment from 'moment';
import './Animal.scss';

class Animal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            animal: {}
        };
    };

    componentDidMount() {
        const { id } = this.props.match.params;
        return getAnimal(id)
            .then(response => {
                this.setState({ animal: response.data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    
    render() {
        const { animal } = this.state;
        return (
           <div className="animal-container">
                {Object.keys(animal).length > 0 &&
                    <div className="card animal-complete-card">
                        <img src={animal.animalDetail.picture} className="card-img-top" alt={animal.name} />
                        <div className="card-body">
                            <h4 className="card-species">{animal.name}</h4>
                            <h5 class="card-title">{animal.species}</h5>
                            <div className="animal-information-first-section">
                                <p className="card-text">{animal.breed}</p> - <p className="card-text">{animal.animalDetail.location}</p>
                            </div>
                            <div className="animal-information-second-section">
                                <p className="card-text"><b>Age: </b>{animal.age}</p>
                                <p className="card-text"><b>Color: </b>{animal.color}</p>
                                <p className="card-text"><b>Publication date: </b>
                                    {moment(animal.animalDetail.publication_date).format('MMMM Do of YYYY')}
                                </p>
                            </div>
                        </div>
                    </div>
                }
           </div> 
        )
    }
}

export default Animal;