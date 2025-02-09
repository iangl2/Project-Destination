import { useState } from 'react';
import './style/history.css';

export default function History() {
  const [activeTab, setActiveTab] = useState('colonial');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const content = {
    colonial: {
      title: 'Época Colonial',
      description: 'El Barrio Bolívar fue fundado en 1602, fue de las primeras áreas pobladas de David; también fundada en el mismo año. Desde esta época',
      image: 'ruta-a-tu-imagen.png', // Cambia esta ruta según corresponda
    },
    union: {
      title: 'Época Unión a Colombia',
      description: 'Contenido relacionado con la época de unión a Colombia...',
      image: 'ruta-a-tu-imagen.png', // Cambia esta ruta según corresponda
    },
    republicana: {
      title: 'Época Republicana',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: 'ruta-a-tu-imagen.png', // Cambia esta ruta según corresponda
    },
  };

  return (
    <div className="historia-container">
      <h1>Historia del Barrio Bolívar</h1>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === 'colonial' ? 'active' : ''}`}
          onClick={() => handleTabChange('colonial')}
        >
          Época Colonial
        </button>
        <button
          className={`tab-button ${activeTab === 'union' ? 'active' : ''}`}
          onClick={() => handleTabChange('union')}
        >
          Época Unión a Colombia
        </button>
        <button
          className={`tab-button ${activeTab === 'republicana' ? 'active' : ''}`}
          onClick={() => handleTabChange('republicana')}
        >
          Época Republicana
        </button>
      </div>
      <div className="content">
        <div className="text-content">
          
          <p>{content[activeTab].description}</p>
        </div>
        <div className="image-content">
          <img src={content[activeTab].image} alt={content[activeTab].title} />
        </div>
      </div>
    </div>
  );
}