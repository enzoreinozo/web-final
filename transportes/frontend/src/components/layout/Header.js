import React from 'react';

const Header = (props) => {
    return(
        <div>Header</div>
    );
}

export default Header;

const Header = (props) => {
    return(
        <header>
            <div className="holder">
                <img src= "transportes/frontend/public/logo192.png" width="100" alt="Transportes X" />
                <h1>Transportes X</h1>
            </div>
        </header>
    )
}

import '../../styles/components/layout.Header.css';