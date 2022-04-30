import React from "react";

const Subscribe = () => {
  return (
    <div className=" container mt-5 mb-5 d-flex flex-row justify-content-evenly align-items-center shadow text-success ">
      <div className=" m-5 text-start ">
            <h5>SUBSCRIBE OUR NEWS LETTER</h5>
            <p>
            Enter your e-mail address to receive regular updates, as 
           <br />
            well as news on upcoming events and special offers.
            </p>
      </div>
      <div className=" m-5 text-start">
            <input type="email" name="email" placeholder="email" />
      </div>
    </div>
  );
};

export default Subscribe;
