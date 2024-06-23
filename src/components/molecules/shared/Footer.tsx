import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-transparent py-4 mt-auto">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Relatio - Todos los derechos reservados.</p>
                <p>Contacto: contacto@relatio.com</p>
            </div>
        </footer>
    );
};

export default Footer;
