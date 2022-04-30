import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const url = "/services.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="mt-5 mb-4">
      <h1 className="mt-5 mb-4 text-primary">Manage Inventory System</h1>

      <Container className="d-flex justify-content-center align-items-center">
        <Row xs={1} md={3} className="g-3">
          {services.map((service) => (
            <ServiceDetail key={service.id} service={service}></ServiceDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
