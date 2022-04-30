import React from "react";
import { Button, Card, Col } from "react-bootstrap";

const InventoryHomeDetail = ({ book }) => {
  const { img, name, description, price, quantity, supplier } = book;
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
          <Button variant="primary mb-2 w-75" size="lg">Stock Update</Button>
        </div>
      </Card>
    </Col>
  );
};

export default InventoryHomeDetail;
