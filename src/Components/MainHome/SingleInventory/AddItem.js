import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const AddItem = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);
  const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) =>
        fetch('http://localhost:5000/addItem', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        }, [])
            .then(res => res.json())
            .then(data => {
                e.target.reset();
            });
    
  return (
    <div className='mb-5'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className='px-5' placeholder="img link" {...register("img", { required: true})} /> <br />
        <input className='px-5' value={user.email} {...register("email", { required: true})} /> <br />
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
