import { Row, Col} from "react-bootstrap"
import ItemCount from "./ItemCount"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


const ItemDetail = ({ item }) => {

 const [add, setAdd] = useState(false)
 const onAdd = () =>{
     setAdd(true)
 }

 useEffect(()=>{

 }, [add])

        return (
        <>
            {item.map(item =>
                <>
                    <container>
                        <Row >

                            <Col sm={8}>   
                            <h3>{item.tittle}</h3>

                            <img src={item.pictureUrl} alt={item.title} width={200}/>
                            
                                
                            </Col>
                            <Col sm={4}> 
                            <div > 

                                <p>Detalles del producto {item.description} </p>
                                <p>Stock disponible {item.stock} </p>


                            </div>
                            <div>
                                {!add &&
                                <ItemCount onAdd={onAdd} ></ItemCount>
                                }
                                {add &&
                                    <Link to={"/carrito"}>Finalizar Compra</Link>
                                }

                            </div>
                            </Col>

                        </Row>
                    </container>

                </>
            )
            }
        </>
    )
}

export default ItemDetail
