import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../Context";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const SinglePlant = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const { data, addItemToCart, setShowModal, setModalID } = useGlobalContext();

  useEffect(() => {
    const getProductData = (id) => {
      return data.find((item) => item.id === Number(id));
    };
    setProduct(getProductData(id));
  }, [id, data]);

  return (
    <div id="single-plant" className="container section">
      <h2 className="plant-title text-center pt-3 mb-4">{product.title}</h2>
      <div className="row flex-column flex-sm-row mb-3">
        {/* image */}
        <div className="col-12 col-sm-4 d-flex justify-content-center justify-content-sm-end p-0">
          <img
            src={`../${product.img}`}
            alt={product.title}
            className="rounded p-1 m-0"
          />
        </div>
        {/* info */}
        <div
          id="single-plant-info"
          className="col-12 col-sm-7 mx-auto p-2 px-4"
        >
          <h5>
            <span className="fw-bold">Scientific Name: </span>
            {product.sciName}
          </h5>
          <h6>
            <span className="fw-bold">Family: </span>
            {product.family}
          </h6>
          <h6>
            <span className="fw-bold">Species: </span>
            {product.species}
          </h6>
          <h6 className="fw-bold">
            <span>Price: </span>$ {product.price}
          </h6>
          <h6 className="mb-4">
            <span className="fw-bold">Summary:</span>
            {product.info}
          </h6>
          <div id="btn-container" className="d-flex">
            <Link to="/">
              <button className="btn fw-bolder text-capitalize" id="btn-home">
                back to Store
              </button>
            </Link>

            <button
              onClick={() => {
                addItemToCart(product.id);
                setShowModal(true);
                setModalID(product.id);
              }}
              className="btn fw-bolder text-capitalize"
              id="btn-cart"
            >
              {product.inCart ? "in Cart" : "add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePlant;
