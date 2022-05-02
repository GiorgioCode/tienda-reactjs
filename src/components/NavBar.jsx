import { Link } from "react-router-dom"
import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <div className="navbar fixed z-50 bg-stone-900">
      <div className="flex-1">
        <Link to={'/'}><img src="/Logo.svg" alt="" className="logo w-48"/></Link>
      </div>
      <Link className="btn mx-1" to="/category/pizza">Pizzas</Link>
      <Link className="btn mx-1" to="/category/pasta">Pastas</Link>
      <div className="flex-none">
        <CartWidget/>
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://api.lorem.space/image/face?hash=33791" />
            </div>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-stone-900 rounded-box w-52">
            <li>
              <a className="justify-between">
                Perfil
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Historial</a></li>
            <li><a>Cerrar Sesión</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar