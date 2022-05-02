import './App.css';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
          <main className="App-main">
            <Routes>
              <Route path='/' element={<ItemListContainer/>} />
              <Route path ='/Cart/' element={<Cart/>} />
              <Route path='/detalle/:ProductId' element={<ItemDetailContainer/>}/>
              <Route path='/category/:CategoryId' element={<ItemListContainer/>}/>
            </Routes>
          </main>
        <Footer/>
        <ToastContainer/>
      </div>
  </BrowserRouter>
    
  )
}

export default App;