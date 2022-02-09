import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";


const Carrito = () => {
    const { cart, removeItem, total, clear, cantItems } = useContext(CartContext);
    return (
        <div>
            <h1>Carrito</h1>
            <div>
                {cart.addedItems.map((cartItem) => (
                    <div key={cartItem.id}>
                        <h3>{cartItem.tittle}</h3>
                        <span>Cantidad: {cartItem.cantidad}</span>
                        {/* <Button  onClick={() => removeItem(cartItem.id)}>Eliminar</button> */}
                        <Button variant="outline-dark" onClick={() => removeItem(cartItem.id)}>Eliminar</Button>
                    </div>
                ))}
            </div>
            <h4>Total: ${total}</h4>
            {cantItems > 0 && <Button variant="outline-dark" onClick={clear}>Vaciar</Button>
            }

            <Link to="/checkOut">
                <Button variant="outline-dark" >
                    Check out
                </Button >
            </Link>
        </div>
    );
};

export default Carrito;
