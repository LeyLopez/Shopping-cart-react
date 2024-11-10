import React, { useState } from "react";
import "../styles/card.css";

export const Card = ({
  imagen,
  titulo,
  descripcion,
  precio,
  handleAgregar,
  handleEliminar
}) => {
  const [add, setAdd] = useState(false);

  const clickAgregar = () => {
    handleAgregar()
    setAdd(true);
  };

  const clickQuitar = () => {
    handleEliminar()
    setAdd(false);
  };

  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={imagen} alt={titulo} />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{titulo}</h3>
        <p className="tarjeta-descripcion">{descripcion}</p>
        <p className="tarjeta-precio">{precio}</p>
      </div>

      {add ? (
        <button type="button" className="boton-quitar" onClick={clickQuitar}>
          Quitar del carrito
        </button>
      ) : (
        <button type="button" className="boton-agregar" onClick={clickAgregar}>
          Agregar al carrito
        </button>
      )}
    </div>
  );
};
