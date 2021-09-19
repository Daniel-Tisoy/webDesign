import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <a href="#">inicio</a>
          <a href="#">Login</a>
          <a href="#">Sign up</a>
        </nav>
     
      <section>
      <img src={logo} className="App-logo" alt="logo" />
      </section>
      <section>
        <h1 className='h1'>bienvenido a mi página Web</h1>
      </section>
      </header>
    </div>
  );
}

export default App;
