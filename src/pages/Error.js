import React from "react";
import { Link } from "react-router-dom";
// import errorLogo from "../logo4040-cropped.svg";

const Error = () => {
  return (
    <main>
      <section className="section error-section">
        <div className="error-container">
          <div className="error-content">
            <h4 className="error-title">404 not found</h4>
            <h2>i have bad news for you!</h2>
            <p>
              The page you are looking for might be removed or temporarly
              unavailable.
            </p>
            <Link to="/">
              <button type="button" className="btn error-btn">
                back to homepage
              </button>
            </Link>
          </div>

          <div className="error-image">
            {/* <img src={errorLogo} alt="404 illustration" /> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Error;
