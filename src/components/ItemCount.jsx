import React from 'react';
import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
  const [cantidadseleccionada, setCantidad] = useState(initial);

  const agregarProductos = (num) => {
    setCantidad(cantidadseleccionada + num);
  };

  return (
    <div className="count-container">
      <div className="count-container__contador">
        <button className="btn glass btn-circle hover:bg-red-500 hover:text-white bg-red-800 text-white text-4xl m-2" onClick={() => agregarProductos(-1)} disabled={cantidadseleccionada === initial ? true : null}> - </button>
        <span className="count-container__qty">{cantidadseleccionada}</span>
        <button className="btn glass btn-circle hover:bg-green-500 hover:text-white bg-green-800 text-white text-4xl m-2" onClick={() => agregarProductos(+1)} disabled={cantidadseleccionada === stock ? true : null}> + </button>
      </div>
      <button className="btn text-2xl w-full hover:bg-red-500 hover:text-white hover:bg-red-800 hover:text-white bg-green-900 text-white" onClick={() => onAdd(cantidadseleccionada)} disabled={stock === 0 ? true : null}> Añadir </button>
      <p>disponibles: {stock}</p>
    </div>
  );
};

export default ItemCount;
