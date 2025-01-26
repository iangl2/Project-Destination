import React from 'react';
import './style/placeshome.css';
import PlaceCard from './placecard';
import places from '../../places.json';


const PlacesHome = () => {

    return (
        <div>
            <h1 className='placesHomeTitle'>Sitios Históricos</h1>
            <nav className='selectPlace'>
                <ul className='selectPlaceList'>
                    <li>
                        Gastronomia
                    </li>
                    <li>
                        Hospedaje
                    </li>
                    <li>
                        Sitios Históricos
                    </li>
                    <li>
                        Otros lugares
                    </li>
                </ul>
            </nav>
            <section className='placesHomeMainContainer'>
                <PlaceCard name='Catedral de San Salvador' image='https://image-tc.galaxy.tf/wijpeg-cr6cgbtncf7ttnay83rs4gl1r/parque-miguel-de-cervantes-1-result.jpg'></PlaceCard>
                {places.places.map((place) => (
                    <PlaceCard  name={place.name} image={place.image} />
                ))}

            </section>
        </div>
    );
};

export default PlacesHome;