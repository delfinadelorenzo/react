import { Row, Col, Figure } from "react-bootstrap"
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


  return (
    <div className="itemBody" >
      <Row>
        <div>
          <h3 className="titulo" >{item.tittle}</h3>
        </div>
        <Col lg={true} sm={8}  >
          <div className="displayFoto">
            <Figure >
              <Figure.Image
                width={500}
                height={500}
                alt={item.title}
                src={item.pictureUrl}
              />
            </Figure>
          </div>

          {/* <img className="fotoProducto"  alt={item.title} width={200} /> */}

        </Col>
        <Col lg={true} sm={8}>

          <div className="detalleProduc" >
            <p>Detalle del producto
            </p>
            <p>  {item.description} </p>
            {/* <p>Stock disponible {item.stock} </p> */}
          </div>
          <div >
            {isInCart(item.id)
              ?
              <span>Ya esta agregado al carrito</span>
              :
              <ItemCount item={item} onAdd={addItem}></ItemCount>
            }
          </div>
          <div>
            <Link to={"/cart"} className="btnCompra">Finalizar Compra</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ItemDetail;
