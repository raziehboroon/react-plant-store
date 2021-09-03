import React from "react";

const Footer = () => {
  const getCopyrightDate = () => {
    const date = new Date();
    return date.getFullYear();
  };

  return (
    <footer>
      <div className="container container-lg d-flex justify-content-center text-capitalize align-items-center h-100 text-white font-weight-light text-center">
        <p className="m-1">
          &copy; {getCopyrightDate()} Razieh Boroon. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
