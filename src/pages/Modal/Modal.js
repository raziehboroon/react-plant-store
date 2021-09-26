import React, { useState, useEffect } from "react";
import "./Modal.scss";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context";
const Modal = () => {
  const { modalID, showModal, setShowModal, data } = useGlobalContext();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProductData = (modalID) => {
      return data.find((item) => item.id === Number(modalID));
    };
    setProduct(getProductData(modalID));
  }, [modalID, data]);

  if (!showModal) {
    return null;
  }
  return (
    <div className="modal-container">
      <div className="row justify-content-center my-auto">
        <div
          id="modal"
          className="col-5 text-center text-capitalize p-3 rounded"
        >
          <h5 className="fw-bold">item added to the cart</h5>
          <img
            src={`../${product.img}`}
            alt={product.title}
            className="img-fluid mb-2"
          />
          <h5 className="fw-bold">{product.title}</h5>
          <Link to="/">
            <button
              onClick={() => setShowModal(false)}
              className="btn fw-bolder text-capitalize mb-2"
              id="btn-home"
            >
              back to store
            </button>
          </Link>
          <Link to="/Cart">
            <button
              onClick={() => setShowModal(false)}
              className="btn fw-bolder text-capitalize mb-2"
              id="btn-cart"
            >
              to cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
