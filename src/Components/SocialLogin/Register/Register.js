import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import GithubLogin from "../GithubLogin/GithubLogin";
import GoogleLogin from "../GoogleLogin/GoogleLogin";

const Register = () => {
  return (
    <div className="Form my-5 mx-5 bg-light p-5 border-0 shadow">
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
            <h2 className="text-success text-start ">Sign Up</h2>
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="name" placeholder="Your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="d-flex flex-row justify-content-center mb-2">
                <Button
                  style={{width:'300px'}}
                  variant="success mb-3"
                  type="submit"
                >
                <img
                  width="30px"
                  className="mx-2 rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZLuxqbW7nxjHFd8nUlmdq_IA4P0cXbfjlrQ&usqp=CAU"
                  alt=""
                />
                  Sign Up
                </Button>
              </div>
            </Form>
            
            <div className="text-start">
              <Link to="#" className="text-decoration-none">Forget password ? </Link>
              <p>
                Already have an account ?{" "}
                <Link to="/login" className="text-decoration-none"> Please Login </Link>
              </p>
            </div>
            <GoogleLogin></GoogleLogin>
            <GithubLogin></GithubLogin>
          </div>
        </div>
      </div>
  );
};

export default Register;
