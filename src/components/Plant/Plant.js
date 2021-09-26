import React from "react";
import "./Plant.scss";
import { useGlobalContext } from "../../Context";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const Plant = ({ id, title, img, price, inCart }) => {
  const { addItemToCart, setShowModal, setModalID } = useGlobalContext();

  return (
    <article id="card" className="col-5 col-sm-3 m-2 m-sm-3 p-0">
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
          className="p-2 border-0 fw-bold"
        >
          {inCart ? " in Cart " : <i className="fas fa-shopping-cart"></i>}
        </button>
      </div>
      <div className="card-body">
        <div className="row flex-column flex-sm-row align-items-center justify-content-between ">
          <h5 className="card-title text-capitalize col-12 col-sm-8 p-0 fw-bold text-secondary">
            {title}
          </h5>
          <h5 className="card-title text-secondary p-1 col-12 col-sm-4 text-end fw-bold">
            $ {price}
          </h5>
        </div>
      </div>
    </article>
  );
};

export default Plant;

// Plant.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   price: PropTypes.number.isRequired,
//   inCart: PropTypes.bool.isRequired,
// sciName: PropTypes.string.isRequired,
// family: PropTypes.string.isRequired,
// species: PropTypes.string.isRequired,
// info: PropTypes.string.isRequired,
// count: PropTypes.number.isRequired,
// total: PropTypes.number.isRequired,
// };
