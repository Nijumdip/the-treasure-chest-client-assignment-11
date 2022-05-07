import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='mb-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='px-5' placeholder="img link" {...register("img", { required: true})} /> <br />
        <input className='my-2 px-5' placeholder="Name" {...register("name", { required: true})} /><br />
        <textarea className='px-5' rows='8' cols='22' placeholder="Description" {...register("description", { required: true})} /><br />
        <input className='my-2 px-5' placeholder="Price" {...register("price", { required: true})} /><br />
        <input className='px-5' placeholder="Supplier" {...register("supplier", { required: true})} /> <br />
        
        <input className='my-2 px-5' placeholder="Quantity" type="number" {...register("quantity")} /><br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddItem;
