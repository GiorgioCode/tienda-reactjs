import ItemCount from "./ItemCount"

const CartWidget = () => {
  return (
    <div className="dropdown dropdown-end">
    <label tabindex="0" className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item bg-green-400 text-black text-lg">3</span>
      </div>
    </label>
    <div tabindex="0" className="mt-3 card card-compact dropdown-content w-52 bg-stone-900 shadow">
      <div className="card-body">
        <span className="font-bold text-left text-md text-white">Pizza Napolitana <ItemCount/></span>
        <span className="font-bold text-left text-md text-white">Pizza Muzzarella <ItemCount/></span>
        <span className="font-bold text-left text-md text-white">Pizza Pepperoni <ItemCount/></span>
        <span className="text-info text-right text-emerald-900 text-2xl">Subtotal: $99</span>
        <div className="card-actions">
          <button className="btn bg-emerald-900 btn-block text-orange-100 hover:text-white hover:bg-red-800">Finalizar Compra</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default CartWidget