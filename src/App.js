import logo from './logo.svg';
import './App.css';
import Router from './Router';
import MenuRutas from './components/MenuRutas';
import bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from 'popper.js';
import "bootstrap/dist/js/bootstrap.bundle";


function App() {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
