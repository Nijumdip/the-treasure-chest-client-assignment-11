import React from "react";
import { Button } from "react-bootstrap";
import auth from "../../../Firebase/Firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleLogIn = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <div className="d-flex mb-2 flex-row justify-content-center align-items-center">
        <div style={{ height: "2px" }} className=" bg-success w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "2px" }} className=" bg-success w-50"></div>
      </div>
      <div className="d-flex flex-row justify-content-center mb-2">
        <Button
          onClick={handleLogIn}
          style={{ width: "300px" }}
          variant="primary"
        >
          <img
            width="30px"
            src="https://cdn3.iconfinder.com/data/icons/inside/PNG/256x256/icontexto-inside-google.png"
            alt=""
            className="mx-2"
          />
          Google Login
        </Button>
      </div>
    </div>
  );
};

export default GoogleLogin;
