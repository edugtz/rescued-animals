import React from 'react';
import './AnimalCard.scss';

const AnimalCard = (props) => {
    const { name, animalDetail } = props.animal;

    return(
        <div className="animal-card">
            <div className="animal-picture">
                <img src={animalDetail.picture} alt="animal" />
            </div>
            <div className="animal-name-wrapper">
                <h2 className="animal-name">{name}</h2>
            </div>
        </div>
    );
};

export default AnimalCard;