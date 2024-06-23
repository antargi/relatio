// About.tsx

import React from 'react';

const About: React.FC = () => {
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-semibold mb-4">Acerca de Nosotros</h2>
                <p className="text-lg mb-4">
                    Bienvenido a Relatio, tu fuente de información sobre diversos temas.
                    Nos esforzamos por ofrecer contenido relevante y de calidad para nuestros lectores.
                </p>
                <p className="text-lg mb-4">
                    En Relatio, cubrimos una amplia gama de temas, desde tecnología hasta viajes,
                    pasando por cocina y estilo de vida. Nuestro objetivo es proporcionar
                    contenido interesante y útil que enriquezca la vida de nuestros lectores.
                </p>
                <p className="text-lg mb-4">
                    Gracias por visitar Relatio. Esperamos que disfrutes explorando nuestro blog
                    y que encuentres contenido que te resulte informativo y entretenido.
                </p>
            </div>
        </div>
    );
};

export default About;
