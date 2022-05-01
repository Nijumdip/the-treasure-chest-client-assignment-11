import React from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <div style={{ height: "300px" }} className="w-100 d-flex flex-column justify-content-center align-items-center">
      <div className='d-flex justify-content-center align-items-center'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h1>Loading ....</h1>
      </div>
      <h5>Please Wait a Moment </h5>
    </div>
  );
};

export default LoadingSpinner;
