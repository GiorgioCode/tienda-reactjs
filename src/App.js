import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <Hero saludoinicial="¡Te estabamos esperando!" saludosecundario="¡Bienvenid@ a nuestra pizzeria online! te invitamos a hacer tu pedido presionando el siguiente botón."/>
        <ItemListContainer novedad1="Nueva pizza vegetariana" novedad2="Nueva Extra pepperoni" novedad3="Nueva Pepperoni sin gluten" novedad4="Al taglio extra oliva" novedad5="Napolitana tradicional" novedad6="Nueva Pizza Keto" novedad7="Extra Cuatro quesos" />
        <Footer/>
      </main>
    </div>
  )
}

export default App;