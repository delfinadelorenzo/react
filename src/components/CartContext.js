import React, { useState, createContext } from "react";


const CartContext = createContext();


const initialState = {
  addedItems: [],
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);


  const addItem = (item, cantidad) => {
    let itemToAdd = Object.assign(item, { cantidad });

    // actualiza Cantidad.
    if (isInCart(itemToAdd.id)) {
      const updateItemsAdded = cart.addedItems.map((producto) => {
        if (producto.id === itemToAdd.id)
          return {
            ...producto,
            cantidad:
              producto.cantidad + cantidad <= producto.stock 
              ? producto.cantidad + cantidad 
              : producto.cantidad
          };
        return producto;
      });
      return setCart({
        addedItems: updateItemsAdded,
      });
    }

    setCart({
      addedItems: [...cart.addedItems, itemToAdd],
    });
  };

  const calculoTotalPrice = (item, cantidad) => {
    return ( cart.addedItems || []).reduce (
      (total , actual) => total + actual.price * actual.cantidad,
      0
    )
  };

  // ---------> VERIFICA SI UN ITEM ESTÁ EN EL CART <---------
  const isInCart = (id) => {
    return cart.addedItems.some((addedItem) => addedItem.id === id)
  };

  // ---------> REMOVER ITEM <---------
  const removeItem = (id) => {
    const itemToDecrease = cart.addedItems.find (
      (cartItem) => cartItem.id ===id
    );
    if (itemToDecrease.cantidad >1 ){
      const updateItems = cart.addedItems.map((cartItem) => {
        if (cartItem.id === id){
          cartItem.cantidad = cartItem.cantidad - 1;
        }
        return cartItem;
      });
      setCart ({addedItems:updateItems})
    } else {
      setCart({
        addedItems: cart.addedItems.filter((cartItem) => cartItem.id !== id),
      });
    }
  };
  
  const clear = () => {
    setCart(initialState);
  };

  const calcularCantItems = () =>{
    return cart.addedItems.reduce ((total,actual) =>{
      return total + actual.cantidad;
    }, 0);
  }
  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clear,
        cantItems: calcularCantItems(),
        total : calculoTotalPrice (),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, CartContext };