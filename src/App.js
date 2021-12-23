import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';

function App() {

  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>

  );
}

export default App;
