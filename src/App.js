import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <main className="App-main">
        <Hero/>
      <Footer/>
      </main>
    </div>
  )
}

export default App;