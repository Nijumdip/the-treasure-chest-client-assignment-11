import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const InventoryHomeDetail = ({ book }) => {
  const { _id,  img, name, description, price, quantity, supplier } = book;
  return (
    <Col>
      <Card className="shadow ">
        <div>
          <img
            className="m-3 rounded-3"
            variant="top"
            width="180px"
            height="150px"
            src={img}
            alt=""
          />
          <Card.Title>Name : {name}</Card.Title>
        </div>
        <Card.Body>
          <p> Description :- {description}</p>
          <h6>Price : $ {price}</h6>
          <h6>Quantity : {quantity}</h6>
          <small>Supplier:{supplier}</small>
        </Card.Body>
        <div className="d-flex flex-column justify-content-center align-items-center ">
          <Link to={`/inventory/${_id}`}
        ><Button variant="primary mb-2 w-100" size="lg">Stock Update</Button></Link>
        </div>
      </Card>
    </Col>
  );
};

export default InventoryHomeDetail;
