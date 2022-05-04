import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import GithubLogin from "../GithubLogin/GithubLogin";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import LoadingSpinner from "../../SharedPage/LoadingSpinner/LoadingSpinner";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    general: "",
  });
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const resetPass = async () => {
    await sendPasswordResetEmail(userInfo.email);
    alert("Sent email");
  };

  if (loading || sending) {
    <LoadingSpinner></LoadingSpinner>
  }

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    if (hookError||error) {
      setErrors({
        ...errors,
        general: (
          <div>
            <p className="text-danger">{hookError?.message} {error?.message}</p>
            
          </div>
        ),
      });
    }
  }, [hookError]);

  const handleEmailBlur = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: event.target.value });
      setErrors({ ...errors, email: "" });
    } else {
      setErrors({
        ...errors,
        email: <p className="text-danger">Please Provide a valid Email</p>,
      });
      setUserInfo({ ...userInfo, email: "" });
    }
  };

  const handlePasswordBlur = (event) => {
    const passwordRegex = /(?=.*?[0-9])/;
    const validPassword = passwordRegex.test(event.target.value);
    if (validPassword) {
      setUserInfo({ ...userInfo, password: event.target.value });
      setErrors({ ...errors, password: "" });
    } else {
      setErrors({
        ...errors,
        password: <p className="text-danger">At least one numeric digit ! </p>,
      });
      setUserInfo({ ...userInfo, password: "" });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  };

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
              <Form.Control
                type="email"
                placeholder="Enter email"
                onBlur={handleEmailBlur}
              />
            </Form.Group>
            {errors.email}

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="Password"
                onBlur={handlePasswordBlur}
              />
            </Form.Group>
            {errors.password}

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
            {errors.general}
          </Form>

          <div className="text-start">
            <Link to="#" onClick={resetPass} className="text-decoration-none">
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
