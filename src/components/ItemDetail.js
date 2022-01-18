import { Row, Col } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useState , useContext} from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"


const ItemDetail = ({ item }) => {

    const { addItem} = useContext (CartContext);
    const [add] = useState()



    return item.map((item) => (
        <container>
          <Row>
            <Col sm={8}>
              <h3>{item.tittle}</h3>
    
              <img src={item.pictureUrl} alt={item.title} width={200} />
            </Col>
            <Col sm={4}>
              <div>
                <p>Detalles del producto {item.description} </p>
                <p>Stock disponible {item.stock} </p>
              </div>
              <div>
                {!add && <ItemCount item={item} 
                onAdd={addItem}></ItemCount>
                }

                <Link to={"/cart"}>Finalizar Compra</Link>
              </div>
            </Col>
          </Row>
        </container>
      ));
    };
    
    export default ItemDetail;
    