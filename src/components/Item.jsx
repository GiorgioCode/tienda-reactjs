import React from 'react';
import ItemCount from './ItemCount.jsx';
import { toast } from 'react-toastify';
import { Link } from "react-router-dom"

const Item = ({ nombre, imagen, precio, id, stock, detalle}) => {
  const onAdd = (cantidadseleccionada) => {
    toast.success(`Agregaste ${cantidadseleccionada} pizza/s estilo ${nombre}`, {
      theme: "dark",
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
        <div className="hover:text-green-800 card w-72 bg-base-100 shadow-xxl m-2">
        <Link to={`/detalle/${id}`}><figure><img src={imagen} alt="Pizza" /></figure></Link>
          <div className="w-72 h-65 card-body bg-red-100 text-stone-900">
          <Link to={`/detalle/${id}`}><h2 className="card-title text-3xl text-green-900">{nombre}</h2></Link>
          <Link to={`/detalle/${id}`}><p className='text-4xl'>${precio}</p></Link>
            <ItemCount stock={stock} onAdd={onAdd} initial={1} />
          </div>
        </div>
  );
};

export default Item;
