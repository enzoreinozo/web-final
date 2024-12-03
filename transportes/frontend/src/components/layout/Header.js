import React from 'react';
import '../../styles/components/layout.Header.css';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <img src="img/ala.jpg" alt="Logo de Transportes" />
                <h1>Transportes</h1>
            </div>
        </header>
    );
};

export default Header;