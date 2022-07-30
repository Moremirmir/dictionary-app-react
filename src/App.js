import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="row">
            <div className="col-2">
              <img src={logo} className="App-logo img-fluid" alt="logo" />
            </div>
            <div className="col-2">
              <div className="Logo-title">Dictionary</div>
            </div>
          </div>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Miriam DaSilva</small>
        </footer>
      </div>
    </div>
  );
}
