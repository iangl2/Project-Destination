import React from 'react'

import './styles/visitus.css'

function VisitUs() {
  return (
    <div className='contenedorVisitUs'>
        <h1 className='tituloVisitUs'>
            VISÍTANOS
            </h1>

        <div className='selectPlaceVisitUs'>
            <div className='buttonsPlaceVisitUs'>
                <button className='buttonVisitUs'>
                 GASTRONOMÍA
                </button>
                <button className='buttonVisitUs'>
                 HOSPEDAJES
                </button>
                <button className='buttonVisitUs '>
                 SITIOS HISTÓRICOS
                </button>
                <button className='buttonVisitUs'>
                 OTROS LUGARES
                </button>
            </div>
            <div className='carrouselPicturesVisitUs'>
        
            </div>


        </div>

        <button className='botonVisitUs'>
    VER MÁS
        </button>
    </div>
  )
}
export default VisitUs