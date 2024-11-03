import '../styles/footer.css'
import Logo from '../assets/D_de_destination_blanco.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Idioma from './idioma';
import { useState } from 'react';

export default function Footer() {
    const [selected, setSelected] = useState("Idioma");
    return(
        <div className ='footer'>
            <div className='row'>
            <div className="col">
                <img src={Logo} className='logo'></img>
                <h4>Destination</h4>
                <p>¿Quiénes Somos?</p>
            </div>
            <div className="col">
            <h3>Navegación</h3>
            <ul>
            <li><a href=''>Inicio</a></li>
            <li><a href=''>Mapa</a></li>
            <li><a href=''>Publicaciones</a></li>
            </ul>
            </div>
            <div className="col">
            <h3>Patrocinadores</h3>
            </div>
            <div className="col">
            <h3>Redes Sociales</h3>
                <div className="social-icons">
                <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                </div>
            </div>
            <div className="col">
            <h3>Idioma</h3>
            <Idioma selected={selected} setSelected={setSelected}/>
        </div>
        </div>
       
       
        </div>
    );
}