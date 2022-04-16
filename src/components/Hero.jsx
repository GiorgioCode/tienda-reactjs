const Hero = (props) => {
  return (
  <div className="hero  bg-orange-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="/pizzahumito.gif" className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold text-stone-900">{props.saludoinicial}</h1>     
      <p className="py-6 text-red-800">{props.saludosecundario}</p>
      <button className="btn bg-emerald-900 btn-block text-lg text-orange-100 hover:text-white hover:bg-red-800">Realizar pedido.</button>
    </div>
  </div>
  </div>
  )
}

export default Hero