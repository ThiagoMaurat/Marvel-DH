import { useCartContext } from "contexts/cart";
import ComicDetail from "dh-marvel/components/comic-sucess-detailed";
import React from "react";

export default function Success() {
  const { cart } = useCartContext();

  return (
    <>
      {cart && (
        <ComicDetail
          title={cart.title}
          thumbnail={cart.thumbnail}
          prices={cart.prices}
          stock={cart.stock}
          description={cart.description}
        />
      )}
    </>
  );
}
