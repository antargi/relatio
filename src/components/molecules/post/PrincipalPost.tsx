import React from "react";
import Button from "../../atoms/Button";
import imgExample from "../../../assets/img/realidad_aumentada.png";

const PrincipalPost: React.FC = () => {
  return (
    <div className="bg-transparent flex max-w-5xl mx-auto rounded-xl overflow-hidden p-8 shadow-lg mb-8">
      <div className="w-1/2 m-2">
        <div className="flex">
          <p>Antonina A.</p>
          <svg width="50" height={20} className="stroke-2 stroke-white" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <line x1="40" x2="10" y1="10" y2="10" />
          </svg>
          <p>6 horas atrás</p>
        </div>

        <h2 className="text-4xl text-fuchsia pt-4">
          Tecnología holográfica transforma la experiencia de realidad aumentada
        </h2>
        <p className="py-2">
          Un equipo de investigadores ha logrado un hito en la industria de la
          tecnología: la combinación de holografía y realidad aumentada
          promete....
        </p>
        <Button primary>Leer</Button>
      </div>
      <div className="w-1/2 m-2">
        <img src={imgExample}></img>
      </div>
    </div>
  );
};

export default PrincipalPost;
