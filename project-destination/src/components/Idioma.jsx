import React, { useState } from 'react';
import '../styles/idioma.css';

function Idioma() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Español');

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <div className="dropdown-selected" onClick={toggleDropdown}>
                {selectedOption}
            </div>
            {isOpen && (
                <ul className="dropdown-options">
                    <li onClick={() => handleOptionClick('Español')}>Español</li>
                    <li onClick={() => handleOptionClick('Português')}>Português</li>
                    <li onClick={() => handleOptionClick('English')}>English</li>
                </ul>
            )}
        </div>
    );
}

export default Idioma;