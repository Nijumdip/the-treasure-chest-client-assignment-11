import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import InventoryDetail from "../InventoryDetail/InventoryDetail";

const Inventory = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "/inventory.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-5 mb-4">
      <h1 className="mt-5 mb-4 text-primary">
        Books Categories : {books.length}
      </h1>

      <Container className="d-flex justify-content-center align-items-center">
        <Row xs={1} md={3} className="g-4">
          {books.slice(0, 6).map((book) => (
            <InventoryDetail
                key={book.id}
                book={book}
              ></InventoryDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Inventory;
