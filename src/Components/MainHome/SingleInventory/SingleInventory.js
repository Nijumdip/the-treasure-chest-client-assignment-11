import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const { id } = useParams();
    const [singleInventory, setSingleInventory] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/inventory/${id}`)
            .then(res => res.json())
            .then(data => setSingleInventory(data));
    },[])
    return (
        <div  className="d-flex flex-column justify-content-center align-items-center ">
        <Card className="shadow my-5 pb-5 " style={{ width: '22rem' }}>
        <div>
          <img
            className="m-3 rounded-3"
            variant="top"
            width="180px"
            height="150px"
            src= {singleInventory.img}
            alt="img Not Found"
          />
          <Card.Title>Name : {singleInventory.name} </Card.Title>
        </div>
        <Card.Body>
          <p > Description :- {singleInventory.description} </p>
          <h6>Price : $ {singleInventory.price} </h6>
          <h6>Quantity : {singleInventory.quantity} </h6>
          <small>Supplier: {singleInventory.supplier} </small>
        </Card.Body>
        <div className="d-flex flex-column justify-content-center align-items-center mb-2 ">
          <Button variant="primary mb-5 w-75" size="lg"> Stock Update</Button>
        </div>
      </Card>
        </div>
    );
};

export default SingleInventory;