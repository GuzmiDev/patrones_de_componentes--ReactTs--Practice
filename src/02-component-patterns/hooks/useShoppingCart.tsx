import { useState } from "react";
import { cart, onChangeArgs } from "../interfaces/interfaces";
export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<cart>();

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest }: any = oldShoppingCart;
        return rest;
      }

      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return { shoppingCart, onProductCountChange };
};
