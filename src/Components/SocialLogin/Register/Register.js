import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GithubLogin from "../GithubLogin/GithubLogin";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
// import { sendEmailVerification } from "firebase/auth";
import LoadingSpinner from "../../SharedPage/LoadingSpinner/LoadingSpinner";

const Register = () => {
  const [userInfo, setUserInfo] = useState({ email: '', password: '', confirmPassword:'' });
  const [errors, setErrors] = useState({ emailError: '', passwordError: '', generalError: '' });
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    <LoadingSpinner></LoadingSpinner>
  }
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user]);

  useEffect(() => {
    if (error) {
      setErrors({
        ...errors,
        general: (
          <div>
            <p className="text-danger">{error?.message}</p>
          </div>
        ),
      });
    }
  }, [error]);
 

  const handleEmailBlur = (e) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    }
    else {
      setErrors({ ...errors, emailError: <p className="text-danger">Please Provide a valid Email</p> });
      setUserInfo({ ...userInfo, emailError: "" });
    }
  }

  const handlePasswordBlur = (e) => {
    const passwordRegex = /(?=.*?[0-9])/;
    const validPassword = passwordRegex.test(e.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    }
    else {
      setErrors({ ...errors, passwordError: <p className="text-danger">At least one numeric digit ! </p> });
      setUserInfo({ ...userInfo, passwordError: "" });
    }
  }
  const handleConfirmPasswordBlur = (e) => {
    const confirmPass = e.target.value;
    if (confirmPass === userInfo.password) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    }
    else {
      setErrors({ ...errors, passwordError: <p className="text-danger">Password don't match  </p> });
      setUserInfo({ ...userInfo, confirmPassword: "" });
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(userInfo.email, userInfo.password, userInfo.confirmPassword);
  }

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
            <Form onSubmit={handleSubmit} className="text-start">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" onBlur={handleEmailBlur} />
              </Form.Group>
              {errors.emailError}

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" onBlur={handlePasswordBlur} />
            </Form.Group>
            {errors.passwordError}
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm Password" onBlur={handleConfirmPasswordBlur} />
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
