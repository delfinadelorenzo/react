import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  
  return (
    <div className="App">
      <NavBar/>
      {/* { productos.map (p=> <ItemListContainer description={p.description} price={p.price}/>) } */}
    <ItemCount/>
    </div>
    
  );
}

export default App;
