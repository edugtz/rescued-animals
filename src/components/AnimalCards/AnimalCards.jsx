import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
                        <NavLink
                            key={`${animal.name} - ${animal.id}`}
                            to={`/${animal.id}`}
                        >
                            <AnimalCard 
                                animal={animal} 
                                key={`${animal.name} - ${animal.id}`}
                            />
                        </NavLink>
                    );
                })}
            </div>
        );
    };
};

export default AnimalCards;