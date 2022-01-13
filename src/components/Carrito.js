import React, { useContext } from "react";
import { CartContext } from "./CartContext";

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
            {cantItems > 0 && <button onClick={clear}>Vaciar carrito</button>}
            <h4>Total: ${total}</h4>
        </div>
    );
};

export default Carrito;
