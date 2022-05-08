import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const EditItems = () => {
  const { id } = useParams();
  console.log(id);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) =>
  fetch(`http://localhost:5000/editItem/${id}`, {
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
    });

  
  return (
    <div className="mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
        className='px-1 w-25 my-2'
          placeholder="img link"
          {...register("img", { required: true })}
        />{" "}
        <br />
        <input
        className='px-1 w-25 my-2'
          placeholder="Name"
          {...register("name", { required: true })}
        />
        <br />
        <textarea
        className='px-1 w-25 my-2'
          rows="8"
          cols="22"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        <br />
        <input
        className='px-1 w-25 my-2'
          placeholder="Price"
          {...register("price", { required: true })}
        />
        <br />
        <input
        className='px-1 w-25 my-2'
          placeholder="Supplier"
          {...register("supplier", { required: true })}
        />{" "}
        <br />
        <input
        className='px-1 w-25 my-2'
          placeholder="Quantity"
          type="number"
          {...register("quantity")}
        />
        <br />
        <input className='px-1 w-25 my-2' type="submit" />
      </form>
    </div>
  );
};

export default EditItems;
