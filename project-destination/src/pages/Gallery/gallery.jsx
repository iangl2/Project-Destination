import '../gallery-style/gallery.css'
import imagen1 from '../../assets/img-gallery/museo-barriojpg.webp'
import imagen2 from '../../assets/img-gallery/arco-barrio-bolivar.jpg'
import imagen3 from '../../assets/img-gallery/catedral-barrio-bolivar.jpg'
import imagen4 from '../../assets/img-gallery/cuartel-policia-barrio-bolivar.jpg'
import imagen5 from '../../assets/img-gallery/medalla-milagrosa-barrio-bolivar.jpg'
import imagen6 from '../../assets/img-gallery/museo-la-casona-barrio-bolivar.jpg'
import imagen7 from '../../assets/img-gallery/plaza-morazan-barrio-bolivar.jpg'

export default function Gallery() {
  return (
    <div className='gallery-container'>

      <h1>Galería de Fotos</h1>

      <div className='box'>
        
        <div className='dream'>
            <img src={imagen1} alt='Imagen 1' />
            <img src={imagen2} alt='Imagen 2' />
            <img src={imagen3} alt='Imagen 3' />
            <img src={imagen4} alt='Imagen 4' />
            <img src={imagen5} alt='Imagen 5' />
            <img src={imagen6} alt='Imagen 6' />
            <img src={imagen7} alt='Imagen 7' />
        </div>
      </div>
    </div>
  )
}   