import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {


  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<div>HOME</div>} />
          <Route path="/bikinis" element={<ItemListContainer tipo="bikinis" />} />
          <Route path="/enterizas" element={<ItemListContainer tipo="enterizas" />} />
          <Route path="/summer" element={<ItemListContainer tipo="summer" />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />}/>
          <Route path="/comoComprar" element={<div>Como Comprar</div>}/>
        </Routes>
        <ItemListContainer />
      </div>
    </Router>


  );
}

export default App;
