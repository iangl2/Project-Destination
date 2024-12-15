import React from 'react'
import './styles/about.css'
function About() {
  return (
    <div className='contenedorAbout'>
        <div className='descripcionAbout'>
            <h2 className='tituloAbout'>
                SOBRE NOSOTROS
                </h2>    
            <p className='parrafoAbout'>
            Bienvenidos al corazón histórico de la provincia Chiriquí. El Barrio Bolívar es más que un lugar; 
            es cuna de cultura, tradición y memorias que se entrelazan en cada calle adoquinada y fachada centenaria.
            </p>



        </div>
        <img className='imagenAbout' src="https://www.thevisitorpanama.info/esp/wp-content/uploads/2020/12/IMG_20201210_110408-1024x766-1.jpg" alt="imagen de barrio bolivar" />

    </div>
  )
}

export default About