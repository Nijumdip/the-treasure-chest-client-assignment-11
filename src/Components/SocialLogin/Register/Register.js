import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="Form my-5 mx-5 bg-light p-5 border-0 shadow">
      <div className="container">
        <div className="row">
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
          <h2 className="text-success text-start ">Please Register</h2>
            <Form className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your name" />
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
              <div>
                <Button variant="success w-50 d-block mx-auto mb-3" type="submit">
                  Login
                </Button>
              </div>
              <Link to="#" className="text-decoration-none">Forget password ?</Link>
              <p>
              Already have an account ? <Link to="/login" className="text-decoration-none"> Please Login </Link>
              </p>
            </Form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;