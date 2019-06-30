import React, { Component } from 'react';
import AnimalCard from '../AnimalCard';
import './AnimalCards.scss';

class AnimalCards extends Component {
    // constructor(props) {
    //     super(props);
        
    // };

    render() {
        const { animals } = this.props;
        return(
            <div className="animal-cards-container">
                {animals.map(animal => {
                        return (
                            <AnimalCard 
                                animal={animal} 
                                key={`${animal.name} - ${animal.id}`}
                            />
                        );
                })}
            </div>
        );
    };
};

export default AnimalCards;