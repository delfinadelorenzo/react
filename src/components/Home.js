import React from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import './home.scss'
import { FaTruck, FaUndo , FaCreditCard} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <>
                <Card>
                    <Card.Img variant="top" src="/bannerHome.png" />

                </Card>

            </>

            <div className='tituloHome' >
                <h3 >
                    ¡ELEGÍ, PAGA Y RECIBÍ TU PEDIDO SIN MOVERTE DE TU CASA!
                </h3>
                <p>
                    Todos los precios incluyen IVA- Los productos en Sale no tienen cambio.
                </p>
            </div>
            <Container >
                <Row>
                    <Col sm>
                        <a >
                            <Link to={'/comocomprar'}  className='iconHome' ><FaTruck /> Envios a todo el país</Link>
                                                         
                        </a>
                    </Col>
                    <Col sm>
                        <a>
                            <Link to={'/comocomprar'} className='iconHome' > <FaUndo/> Políticas de cambio</Link>

                        </a>
                    </Col>
                    <Col sm>
                        <a>
                            <Link to={'/comocomprar'} className='iconHome' ><FaCreditCard/> Todos los medios de pago</Link>
                        </a>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}
