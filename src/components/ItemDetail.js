import { Row, Col } from "react-bootstrap"
const ItemDetail = ({ item }) => {
    console.log(item)
    return (
        <>
            {item.map(item =>
                <>
                    <container>
                        <Row>

                            <Col>   
                            <h3>{item.tittle}</h3>
                            <img src={item.pictureUrl} alt={item.title} width={200} />
                                
                            </Col>
                            <Col> 
                            <div> 
                                <p>Detalles del producto {item.description} </p>
                            </div>
                            <div>
                                <p>Stock disponible {item.stock} </p>
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
