import React from "react";
import { Card, Col } from "react-bootstrap";

const ServiceDetail = ({ service }) => {
    const { img, name, description } = service;
    return (
    <Col>
      <Card className='service shadow border-0'>
        <div>
          <img
            className="m-3 rounded-3"
            variant="top"
            width="50px"
            height="60px"
            src={img}
            alt=""
          />
          <Card.Title>{name}</Card.Title>
        </div>
        <Card.Body>
          <p>{description}</p>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ServiceDetail;
