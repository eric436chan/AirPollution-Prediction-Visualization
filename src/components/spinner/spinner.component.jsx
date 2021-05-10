import React from "react";
import "./spinner.style.scss";

const Spinner = () => {
  return (
    <div className="spinner d-flex justify-content-center align-items-center">
      <div>Please Wait While We Load the Content... </div>
      
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
