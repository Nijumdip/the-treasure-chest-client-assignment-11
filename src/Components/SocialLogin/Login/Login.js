import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import OrPart from '../OrPart/OrPart';

const Login = () => {
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
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <div>
                <Button
                  variant="success w-50 d-block mx-auto mb-3"
                  type="submit"
                >
                  Login
                </Button>
              </div>
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
            <OrPart></OrPart>
          </div>
        </div>
    </div>
  );
};

export default Login;
