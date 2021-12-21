import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const productos = [
    {description: "Bikini Cies", price: "$1190"},
    {description: "Bikini Granadina", price: "$1500"},
    {description: "Bikini Félix", price: "$1800"},
  ] 
  return (
    <div className="App">
      <NavBar/>
      {/* { productos.map (p=> <ItemListContainer description={p.description} price={p.price}/>) } */}
    <ItemCount/>
    </div>
    
  );
}

export default App;
