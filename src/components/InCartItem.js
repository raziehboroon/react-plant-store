import React from "react";
import { useGlobalContext } from "../Context";

const InCartItem = ({ id, title, img, price, count, total }) => {
  const { removeFromCart, increaseCount, decreaseCount } = useGlobalContext();
  return (
    <div id="inCart__item-container" className="row m-2 align-items-center">
      <div className="col-12 col-sm-2 text-center my-2 my-sm-1">
        <img src={img} alt={title} className="mx-auto w-50" />
      </div>
      <h6 className="col-12 col-sm-2 text-center text-capitalize">{title}</h6>
      <h6 className="col-12 col-sm-2 text-capitalize text-center">$ {price}</h6>

      {/* increase or decrease count */}
      <div className="col-12 col-sm-2 d-flex justify-content-center align-items-center">
        <button
          className="btn px-2 py-0 text-success"
          onClick={() => {
            decreaseCount(id);
          }}
        >
          <i className="fas fa-minus-square mb-2 mt-0"></i>
        </button>
        <h6 className="text-capitalize text-center">{count}</h6>
        <button
          className="btn px-2 py-0 text-success"
          onClick={() => {
            increaseCount(id);
          }}
        >
          <i className="fas fa-plus-square mb-2 mt-0"></i>
        </button>
      </div>
      {/* remove item */}
      <div className="col-12 col-sm-2 d-flex justify-content-center">
        <button
          onClick={() => {
            removeFromCart(id);
          }}
          className="btn text-danger px-2 py-0"
        >
          <i className="fas fa-trash-alt mb-2 mt-0"></i>
        </button>
      </div>

      <h6 className="col-12 col-sm-2 text-capitalize text-center fw-bold">
        item total: ${total}
      </h6>
    </div>
  );
};

export default InCartItem;