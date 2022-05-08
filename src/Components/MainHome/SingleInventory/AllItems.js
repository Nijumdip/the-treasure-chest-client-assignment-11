import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import swal from "sweetalert";

const AllItems = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const url = "https://the-treasure-chest-server.herokuapp.com/inventory";
    fetch(url)
      .then((res) => res.json())
      //   .then((data) => console.log(data));
      .then((data) => setBooks(data));
  }, []);

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this data!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://the-treasure-chest-server.herokuapp.com/delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              const remainingItems = books.filter((book) => book._id !== id);
              setBooks(remainingItems);
              swal("Item is successfully deleted!", {
                icon: "success",
              });
            }
          });
      }
      else {
        swal("Item is not deleted. Data is safe!", {
          icon: "info",
        });
      }
    });
  };

  return (
    <div className="mt-5 mb-4">
      <h1 className="mt-5 mb-4 text-primary">Books Categories</h1>

      <Container className="d-flex justify-content-center align-items-center">
        <Row xs={1} md={3} className="g-4">
          {books.map((book) => (
            <Col key={book._id} book={book}>
              <Card className="shadow  border-0 ">
                <div>
                  <img
                    className="m-3 rounded-3"
                    variant="top"
                    width="180px"
                    height="150px"
                    src={book.img}
                    alt=""
                  />
                  <Card.Title>Name : {book.name}</Card.Title>
                </div>
                <Card.Body>
                  <p> Description :- {book.description}</p>
                  <h6>Price : $ {book.price}</h6>
                  <h6>Quantity : {book.quantity}</h6>
                  <small>Supplier:{book.supplier}</small>
                </Card.Body>
                <div className="d-flex flex-row justify-content-center align-items-center mb-3 ">
                  <Link to={`/editItems/${book._id}`}>
                    <Button variant="primary mx-2"> Edit Item </Button>
                  </Link>
                  <Button
                    onClick={() => handleDelete(book._id)}
                    variant="primary mx-2 w-25"
                  >
                    {" "}
                    Delete{" "}
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default AllItems;
