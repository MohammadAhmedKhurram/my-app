"use client";
import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export const AppWrapper = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Array<any>>([]);
  const [wishlist, setWishlist] = useState<Array<any>>([]);
  console.log("Wishlist", wishlist);
  console.log("cart", cart);

  // const productsToBeOrdered = cart.map((item) => ({
  //   name: item.name,
  //   discountedPrice: item.discountedPrice,
  //   quantity: item.quantity,
  // }));

  const addToCart = (newProduct: any) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (product) => product.name === newProduct.name
      );

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...newProduct, quantity: 1 }];
      }
    });
  };

  const addToWishlist = (newProduct: any) => {
    setWishlist((prevWishlist) => [...prevWishlist, newProduct]);
  };

  const clearWishlist = () => {
    return setWishlist([]);
  };

  const incrementQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.name === productName
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  };

  const decrementQuantity = (productName: string) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.name === productName && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };

  const shippingChargesAndTaxes = 10;

  const subTotal = cart.reduce((acc, item) => {
    return acc + item.quantity * parseFloat(item.discountedPrice);
  }, 0);

  const totalPrice = cart.reduce((acc, item) => {
    return (
      acc +
      item.quantity *
        (parseFloat(item.discountedPrice) + shippingChargesAndTaxes)
    );
  }, 0);

  const clearCart = () => {
    return setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        totalPrice,
        subTotal,
        clearCart,
        addToWishlist,
        wishlist,
        clearWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
};
