import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <Hero/>
        <ItemListContainer/>
        <Footer/>
      </main>
      <ToastContainer/>
    </div>
    
  )
}

export default App;