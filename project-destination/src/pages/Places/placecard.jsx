import React from 'react';

const PlaceCard = (props) => {
    return (
        <div>
            <h2 className='placecardname'>{props.name}</h2>
            <img src={props.image} alt={`Foto de ${props.name}`} />
            <button>
                Ver más
            </button>
        </div>
    );
};

export default PlaceCard;