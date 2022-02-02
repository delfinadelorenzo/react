// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Carrito from './components/Carrito';
import Form from './components/Form'
import { CartContextProvider } from './components/CartContext';
import "./components/App.scss"
import { bikinis } from "./components/data";
import db from './firebase/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { fileUpload } from './firebase/fileUpload'
import Home from './components/Home';

function App() {


  // const arrayUpload = () => {
  //   console.log(bikinis)
  //   bikinis.forEach(async (element) => {
  //     const imgURL = await fileUpload(element.pictureUrl)
  //     addDoc(collection(db, 'products'), { ...element, pictureUrl: imgURL })
  //   })
  // }



  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar />
          {/* {<button onClick={arrayUpload}>subir cosas</button>}   */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />

            <Route path="/detalle/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Carrito />} />
            <Route path="/checkOut" element={<Form/>} />
            <Route path="/comoComprar" element={<div>Como Comprar</div>} />
          </Routes>
        </div>
      </Router>
    </CartContextProvider>


  );
}

export default App;
