import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><Link to="/new-post">Crear Publicación</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
