import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="mt-16 text-3xl font-bold underline decoration-sky-500 hover:decoration-blue-600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">
          Aquí construiremos una tienda con React.JS y TailwindCSS =)
        </h1>
      </header>
    </div>
  );
}

export default App;
