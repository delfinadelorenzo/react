import { Row, Col, Figure, Container } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import "./ItemDetail.scss"
import Footer from '../components/Footer'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



const ItemDetail = ({ item }) => {

  const { addItem, isInCart } = useContext(CartContext);
  const inCart = isInCart(item.id)
  console.log(item)
  console.log(inCart, item)


  return (
    <div>

      <div className="itemBody" >

        <div>
          <h3 className="titulo" >{item.tittle}</h3>
        </div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="8">
              
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

            </MDBCol>
            <MDBCol size="4"><Figure >
              <Figure.Image
                width={500}
                height={500}
                alt={item.title}
                src={item.pictureUrl}
              />
            </Figure></MDBCol>
          </MDBRow>
        </MDBContainer>
        
      </div>


      <div>
        <Footer />
      </div>
    </div>




  );
};

export default ItemDetail;
