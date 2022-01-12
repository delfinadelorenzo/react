import React, { useState, createContext, useContext } from "react";


const CartContext = createContext();

const useCart = () => useContext(CartContext);

const initialState = {
  addedItems: [],
  totalPrice: 0,
};

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(initialState);


  const addItem = (item, cantidad) => {
    let itemToAdd = Object.assign(item, { cantidad: cantidad });

    // actualiza Cantidad.
    if (isInCart(itemToAdd.id)) {
      const updateItemsAdded = cart.addedItems.map((producto) => {
        if (producto.id === itemToAdd.id)
          return {
            ...producto,
            cantidad:
              producto.cantidad < producto.stock
                ? producto.cantidad + cantidad
                : producto.stock,
          };
        return producto;
      });
      return setCart({
        addedItems: updateItemsAdded,
        totalPrice: calculoTotalPrice(itemToAdd, cantidad),
      });
    }

    setCart({
      addedItems: [...cart.addedItems, itemToAdd],
      totalPrice: calculoTotalPrice(itemToAdd, cantidad),
    });
  };

  const calculoTotalPrice = (item, cantidad) => {
    return cart.totalPrice + item.price * cantidad;
  };

  // ---------> VERIFICA SI UN ITEM ESTÁ EN EL CART <---------
  const isInCart = (id) => {
    return cart.addedItems.some((addedItem) => addedItem.id === id)
      ? true
      : false;
  };

  // ---------> REMOVER ITEM <---------
  const removeItem = (id) => {
    let updateTotalPrice = 0;
    const updateItemsAdded = cart.addedItems.filter((producto) => {
      if (producto.id !== id) {
        // Actualizo el precio total ya que se está eliminando
        // un elemento con su cantidad seleccionada.
        updateTotalPrice += decrementTotalPrice(producto);
      }
      return producto.id !== id;
    });
    setCart({
      totalPrice: updateTotalPrice,
      addedItems: updateItemsAdded,
    });
  };
  const decrementTotalPrice = (item) => {
    let updateTotalPrice = 0;   
      return (updateTotalPrice += item.price * item.cantidad);

  };
  const clear = () => {
    setCart(initialState);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItem,
        removeItem,
        clear,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContextProvider, useCart };