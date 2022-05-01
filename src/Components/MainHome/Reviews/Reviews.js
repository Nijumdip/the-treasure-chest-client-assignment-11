import React from "react";

const Reviews = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mb-5 mt-5">
        <div>
            <h1 className="mt-5 mb-4 text-primary">Customers Testimonial</h1>
        </div>
        <div className="container d-flex flex-row justify-content-center align-items-center mb-5 mt-5">
            <div className="shadow m-2" style={{ width: "18rem", height: "320px" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiywPscw9IyDRPebVldthoIs5nT1pTi2Nn2A&usqp=CAU"
                className="rounded-circle shadow mt-2"
                width="100px"
                height="100px"
                alt="..."
              />
              <h6 className="mt-2">Rebeka</h6>
              <div className="card-body">
                <p className="card-text">
                  I love their selection, prices, and staff members. I own a little
                  free library and can always count on getting some books for my
                  little free library. Best place in town to get some books!
                </p>
              </div>
            </div>
            <div className="shadow m-2" style={{ width: "18rem", height: "320px" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0qg3Qt10IOZgdUQE-JooI5iPG9fPck1jJ3A&usqp=CAU"
                className="rounded-circle shadow mt-2 border"
                width="100px"
                height="100px"
                alt="..."
              />
              <h6 className="mt-2">Redro</h6>
              <div className="card-body">
                <p className="card-text">
                  Great prices on books! and they provide thise low prices. I dont
                  feel bad passing them on either! Also audio books are priced
                  wonderfully. Im in the car a lot so these are prefect!
                </p>
              </div>
            </div>
            <div className="shadow m-2" style={{ width: "18rem", height: "320px" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQwgvvfptmgifqWxF8kjrwL0dlo-iNirrMw&usqp=CAU"
                className="rounded-circle shadow mt-2"
                width="100px"
                height="100px"
                alt="..."
              />
              <h6 className="mt-2">Filson</h6>
              <div className="card-body">
                <p className="card-text">
                  This is a fantastic place - wonderful and quality selection,
                  friendly and helpful employees, and participation in a fantastic
                  cause — Book Pillows of Hope!
                </p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Reviews;
