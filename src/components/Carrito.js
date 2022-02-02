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
                        <button onClick={() => removeItem(cartItem.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <h4>Total: ${total}</h4>
            {cantItems > 0 && <button onClick={clear}>Vaciar carrito</button>}

            <Link to="/checkOut">
                <button>
                    Check out
                </button>
            </Link>
        </div>
    );
};

export default Carrito;
