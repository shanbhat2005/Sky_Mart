    import { createContext, useEffect, useState } from "react";


export const Cart = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => { return JSON.parse(localStorage.getItem("cart")) || [];
});
useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

  console.log(cart);

  const addToCart = (product) => {
    const exist = cart.find((item) => {
      return item.id === product.id;
    });

    if (exist) {
      const updatedCart = cart.map((item) => {
        if (product.id === item.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (id) => {
  const updatedCart = cart.filter((item) => item.id !== id);
  setCart(updatedCart);
};

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }

        return item;
      })
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
  };

  return (
    <Cart.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </Cart.Provider>
  );
};