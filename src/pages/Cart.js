import React from "react";
import CartSummary from "../components/CartSummary";
import InCartItem from "../components/InCartItem";
import { useGlobalContext } from "../Context";

const Cart = () => {
  const { data } = useGlobalContext();

  // in case of empty cart
  // const inCartItem = data.filter((item) => console.log(item.inCart));
  const inCartItem = data.filter((item) => item.inCart);
  // console.log(inCartItem);
  if (inCartItem.length === 0) {
    return (
      <div className="container section">
        <h2 className="plant-title text-center pt-2 mb-3">
          your cart is empty
        </h2>
      </div>
    );
  }
  return (
    <div className="container section">
      <h2 className="plant-title text-center pt-2 mb-3">your cart</h2>
      {/* cart column header */}
      <div
        id="inCart__header-container"
        className="row m-2 text-uppercase fw-bold text-center"
      >
        <h6 className="col-2 fw-bold">Products</h6>
        <h6 className="col-2 fw-bold">name</h6>
        <h6 className="col-2 fw-bold">Price</h6>
        <h6 className="col-2 fw-bold">quantity</h6>
        <h6 className="col-2 fw-bold">remove</h6>
        <h6 className="col-2 fw-bold">total</h6>
      </div>
      <div
        id="inCart__header-line"
        className="row w-100 border line-divider"
      ></div>
      {/* cart column items data */}
      {data.map(
        (item) => item.inCart && <InCartItem key={item.id} {...item} />
      )}
      {/* cart summary and summation */}
      <CartSummary />
    </div>
  );
};

export default Cart;
