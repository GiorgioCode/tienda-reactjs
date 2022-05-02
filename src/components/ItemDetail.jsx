import ItemCount from "./ItemCount";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const ItemDetail = ({ item }) => {

  function onAdd(cantidadseleccionada) {
    
    toast.success(`Agregaste ${cantidadseleccionada} pizza/s estilo ${item.nombre}`, {
      theme: "dark",
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="flex align-center justify-center">
      <div class="mt-36 card w-4/5 lg:card-side bg-base-100 shadow-xl">
        <figure><img className="w-max h-full" src={item.imagen} alt="Album"/></figure>
        <div class="card-body">
          <h2 class="card-title">{item.nombre} ${item.precio}</h2>
          <p className="text-sm w-full">{item.detalle}</p>
          <div class="card-actions justify-center">
          <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
      <Link className="btn" to="/">Volver</Link>
    </div>
  )

};

export default ItemDetail;
