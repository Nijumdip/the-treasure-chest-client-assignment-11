import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import auth from "../../../Firebase/Firebase.init";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GithubLogin from "../GithubLogin/GithubLogin";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  let errorElement;
  const [
    signInWithEmailAndPassword, user, loading, hookError,] =
    useSignInWithEmailAndPassword(auth);
  
  if (hookError) {
    errorElement = (
      <div><p className="text-danger"> Error: {hookError?.message}</p></div>
    )
    }

   const handleEmailBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setEmail(event.target.value); 
    }
    else {
      setError(<p className="text-danger">Please Provide a valid Email</p>)
    }
  } 

  const handlePasswordBlur = (event) => {
    const passwordRegex = /(?=.*?[0-9])/;
    const validPassword = passwordRegex.test(event.target.value);
    if (validPassword) {
      setPassword(event.target.value);
    }
    else {
      setError(<p className="text-danger">Please Provide a valid Password</p>)
    }
  }
  

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  }


  return (
    <div className="my-5 mx-5 bg-light p-5 border-0 shadow">
      <div className="container row">
        <div className="col-lg-5 d-flex flex-row justify-content-center align-items-center  mb-5">
          <img
            width="250px"
            height="350px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmEThRaWO9sUfqJu2DrT7cEG-H7wAWAY_JMw&usqp=CAU"
            className=" rounded-circle"
            alt=""
          />
        </div>

        <div className="col-lg-7">
          <h2 className="text-success text-start ">Please Login</h2>
          <Form onSubmit={handleSubmit} className="text-start">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailBlur} />
            </Form.Group>
           
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" onBlur={handlePasswordBlur} />
            </Form.Group>
            {error}
            <div className="d-flex flex-row justify-content-center mb-2">
              <Button
                style={{ width: "300px" }}
                variant="success"
                type="submit"
              >
                <img
                  width="30px"
                  className="mx-2 rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHHeWqv88_8sCh5EspyWez7PBrDedwRG6IzA&usqp=CAU"
                  alt=""
                />
                Login
              </Button>
            </div>
            {errorElement }
          </Form>
          
          <div className="text-start">
            <Link to="#" className="text-decoration-none">
              Forget password ?
            </Link>
            <p>
              Don't have an account ?{" "}
              <Link to="/register" className="text-decoration-none">
                {" "}
                Please register{" "}
              </Link>
            </p>
          </div>
          <GoogleLogin></GoogleLogin>
          <GithubLogin></GithubLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
