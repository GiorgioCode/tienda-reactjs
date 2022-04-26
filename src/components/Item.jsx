import React from 'react';
import ItemCount from './ItemCount.jsx';
import Modal from './ItemDetailContainer.jsx';
import { ToastContainer, toast } from 'react-toastify';

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
    <div className="card w-96 bg-base-100 shadow-xxl m-2">
    <figure><img src={imagen} alt="Pizza" /></figure>
    <div className="card-body bg-red-100 text-stone-900">
      <h2 className="card-title text-4xl text-green-900">{nombre}</h2>
      <p className='text-5xl'>${precio}</p>
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </div>
    <Modal image={imagen} name={nombre} price={precio} detail={detalle}/>
  </div>
  );
};

export default Item;
