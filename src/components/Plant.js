import React from "react";
import { useGlobalContext } from "../Context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Plant = ({ id, title, img, price, inCart }) => {
  const { addItemToCart, setShowModal, setModalID } = useGlobalContext();
  // console.log(id);
  return (
    <div id="card" className="col-12 col-sm-6 col-md-4 col-lg-3 m-3 p-0">
      <div id="image-container">
        <Link to={`/plant/${id}`}>
          <img src={img} alt={title} className="card-img-top img-fluid" />
        </Link>
        <button
          onClick={() => {
            addItemToCart(id);
            setShowModal(true);
            setModalID(id);
          }}
          id="btn-basket"
          className="p-1 border-0"
        >
          {inCart ? "in Cart" : <i className="fas fa-shopping-cart p-1"></i>}
        </button>
      </div>
      <div className="card-body">
        <div className="row align-items-center justify-content-between ">
          <h5 className="card-title text-capitalize col-8 p-0 fw-bold text-secondary">
            {title}
          </h5>
          <h5 className="card-title text-capitalize text-secondary p-1 col text-end">
            $ {price}
          </h5>
        </div>
      </div>
    </div>
  );
};

Plant.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  sciName: PropTypes.string.isRequired,
  family: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  info: PropTypes.string.isRequired,
  inCart: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Plant;
