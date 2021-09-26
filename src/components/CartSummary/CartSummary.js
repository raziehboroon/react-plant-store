import React from "react";
import "./CartSummary.scss";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";
import PayPal from "../PayPal/PayPal";
const CartSummary = () => {
  const { subtotal, tax, total, clearCart } = useGlobalContext();

  return (
    <div className="row justify-content-end py-3">
      <div className="col-12 col-sm-6 col-md-4 justify-content-end">
        <Link to="/">
          <button
            onClick={() => clearCart()}
            id="btn-cart"
            className="btn fw-bold py-1 px-4 my-1 mx-0 text-capitalize"
          >
            clear cart
          </button>
        </Link>
        <h5>
          <span className="plant-title">subtotaln :</span> $ {subtotal}
        </h5>
        <h5>
          <span className="plant-title">tax :</span> $ {tax}
        </h5>
        <h5>
          <span className="plant-title">total :</span> $ {total}
        </h5>
        <PayPal />
      </div>
    </div>
  );
};

export default CartSummary;
