import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import swal from "sweetalert";

const SingleInventory = () => {
  const { id } = useParams();
  const [singleInventory, setSingleInventory] = useState({});
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  
  /* const onSubmit = (data, e) => console.log();
   fetch(`http://localhost:5000/inventory/${id} `, {
    method: "PUT",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringify(data),
}, [])
    .then(res => res.json())
    .then(data => {
      if (data.acknowledged) {
        swal("Item is successfully updated!", {
          icon: "success",
        });
      }
      else {
        swal(" Somethings wrong !! Item isn't updated", {
          icon: "danger",
        });
      }
      e.target.reset();
    }); */
  



  var [quantity, setQuantity] = useState(0);
  const handleDelivered = (itemQuantity) => {
    var numberQuantity = Number(itemQuantity);
    setQuantity(numberQuantity);
    const finalQuantity=quantity--
    console.log(finalQuantity);

  }
  

  useEffect(() => {
    fetch(`https://the-treasure-chest-server.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleInventory(data));
  }, []);
  return (
    <div className=" container d-flex flex-column justify-content-center align-items-center ">
      <Card className="shadow mb-5 my-5" style={{ width: "590px" }}>
        <div>
          <img
            className="m-3 rounded-3"
            variant="top"
            width="180px"
            height="150px"
            src={singleInventory.img}
            alt="img Not Found"
          />
          <h5>Name : {singleInventory.name} </h5>
        </div>
        <div>
          <Card.Body>
            <small className="text-start mx-2"> Description :- {singleInventory.description} </small>
            <h6>Price : $ {singleInventory.price} </h6>
            <h6>Quantity : {singleInventory.quantity} </h6>
            <small>Supplier: {singleInventory.supplier} </small>
          </Card.Body>
        </div>
        <div className="d-flex flex-row justify-content-center align-items-center mb-2 ">
          <Button onClick={()=>handleDelivered(singleInventory.quantity)} variant="primary mx-3 w-25"> Delivered </Button>
          <Link to='/manage'><Button variant="primary">Go Manage-Item</Button></Link>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input className='px-1 mx-1 w-50' placeholder="Quantity" {...register("quantity", { required: true })} />
            <input className='px-1 my-1' value='Re Stock' type="submit" />
          </form>
      </Card>
    </div>
  );
};

export default SingleInventory;
