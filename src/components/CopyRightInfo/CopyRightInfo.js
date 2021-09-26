import React from "react";
import "./CopyRightInfo.scss";

const CopyRightInfo = () => {
  return (
    <>
      <h6 className="text-center text-capitalize fw-bold text-secondary">
        App Logo made by
        <a
          href="https://www.freepik.com"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-success"
        >
          &nbsp;Freepik&nbsp;
        </a>
        from
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-success"
        >
          &nbsp;flaticon.com&nbsp;
        </a>
      </h6>
      <h6 className="text-center text-capitalize fw-bold text-secondary">
        thanks to&nbsp;
        <a
          href="https://unsplash.com/@feeypflanzen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-success"
        >
          Severin Candrian
        </a>
        &nbsp;from &nbsp;
        <a
          href="https://feey.ch/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-success"
        >
          feey.ch
        </a>
        &nbsp;for publishing these nice photos on&nbsp;
        <a
          href="https://unsplash.com/@feeypflanzen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-success"
        >
          unsplash.
        </a>
      </h6>
    </>
  );
};

export default CopyRightInfo;
