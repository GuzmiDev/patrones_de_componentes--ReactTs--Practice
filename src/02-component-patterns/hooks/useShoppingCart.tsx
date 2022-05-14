import { useState } from "react";
import { cart, ProductInCart, onChangeArgs } from "../interfaces/interfaces";
export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<cart>();

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      const productInCart: ProductInCart = oldShoppingCart?.[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest }: any = oldShoppingCart;
      return rest;

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest }: any = oldShoppingCart;
      //   return rest;
      // }

      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return { shoppingCart, onProductCountChange };
};
