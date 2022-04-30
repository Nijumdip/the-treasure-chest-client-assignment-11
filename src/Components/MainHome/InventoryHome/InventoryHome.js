import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import InventoryHomeDetail from "../InventoryHomeDetail/InventoryHomeDetail";

const InventoryHome = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "/inventory.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-5 mb-4">
      <h1 className="mt-5 mb-4 text-primary">Books Categories</h1>

      <Container className="d-flex justify-content-center align-items-center">
        <Row xs={1} md={3} className="g-4">
          {books.slice(0, 6).map((book) => (
            <InventoryHomeDetail
                key={book.id}
                book={book}
              ></InventoryHomeDetail>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InventoryHome;
