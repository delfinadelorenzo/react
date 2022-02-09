import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import Footer from '../components/Footer'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import './Carrito.scss'

const Carrito = () => {
    const { cart, removeItem, total, clear, cantItems } = useContext(CartContext);
    return (
        <div>
            <h1 className="carritoFinal" >Carrito</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size="8">
                        <div>
                            {cart.addedItems.map((cartItem) => (
                                <div key={cartItem.id}>
                                    <h3>{cartItem.tittle}</h3>
                                    <span>Cantidad: {cartItem.cantidad}</span>
                                    <Button variant="outline-dark" onClick={() => removeItem(cartItem.id)}>Eliminar</Button>
                                </div>
                            ))}
                        </div>


                    </MDBCol>
                    <MDBCol size="4">

                        <h4>Total: ${total}</h4>
                        {cantItems > 0 && <Button variant="outline-dark" onClick={clear}>Vaciar</Button>
                        }
                        <Link to="/checkOut">
                            <Button variant="outline-dark" >
                                Check out
                            </Button >
                        </Link>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>




            <div>
                <Footer />
            </div>
        </div >

    );
};

export default Carrito;
