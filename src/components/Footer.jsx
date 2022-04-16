const Footer = () => {
  return (
  <footer className="footer p-10 bg-neutral text-neutral-content bg-emerald-900 text-orange-100">
    <div>
      <span className="footer-title text-center">Nosotros</span> 
      <a className="link link-hover text-center">Terminos y condiciones</a>
      <a className="link link-hover text-center">Políticas de privacidad</a>
      <a className="link link-hover text-center">Contacto</a>
    </div>
      <div className="flex-1">
        <img src="/Logo.svg" alt="" className="logo w-48 items-center"/>
      </div>
  </footer>
  )
}

export default Footer