import { Row, Col } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import "./ItemDetail.scss"


const ItemDetail = ({ item }) => {

  const { addItem, isInCart } = useContext(CartContext);
  const inCart = isInCart(item.id)
  console.log(item)
  console.log(inCart, item)


  return item.map((item) => (
    <div className="itemBody" >
      <Row>
        <div>                    
        <h3 className="titulo" >{item.tittle}</h3>
        </div>
        <Col>
          <img className="fotoProducto" src={item.pictureUrl} alt={item.title} width={200} />
        </Col>
        <Col >
          <div className="detalleProduc" >
            <p>Detalles del producto 
            </p>
            <p>  {item.description} </p>
            {/* <p>Stock disponible {item.stock} </p> */}
          </div>
          <div>
            {isInCart(item.id)
              ?
              <span>Ya esta agregado al carrito</span>
              :
              <ItemCount item={item} onAdd={addItem}></ItemCount>
              }
          </div>
          <div>
          <Link to={"/cart"}>Finalizar Compra</Link>
          </div>
        </Col>
      </Row>
    </div>
  ));
};

export default ItemDetail;
