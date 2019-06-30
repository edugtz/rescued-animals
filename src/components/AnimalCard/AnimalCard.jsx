import React from 'react';
import './AnimalCard.scss';

const AnimalCard = (props) => {
    const { name, animalDetail } = props.animal;

    return(
        <div className="animal-card">
            <h1 className="animal-name">{name}</h1>
            <div className="animal-picture">
                <img src={animalDetail.picture} alt="animal" />
            </div>
        </div>
    );
};

export default AnimalCard;