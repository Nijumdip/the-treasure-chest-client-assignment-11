import React from "react";
import { Button } from "react-bootstrap";
import auth from "../../../Firebase/Firebase.init";
import { useSignInWithGithub, useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const GithubLogin = () => {
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  
    if (user) {
        navigate(from, { replace: true });
    }
    

  const handleLogin = () => {
    signInWithGithub();
  };

  return (
    <div className="d-flex flex-row justify-content-center">
      <Button
        onClick={handleLogin}
        style={{ width: "300px" }}
        variant="secondary"
      >
        <img
          width="30px"
          className="mx-2"
          src="https://octodex.github.com/images/Professortocat_v2.png"
          alt=""
        />
        Github Login
      </Button>
    </div>
  );
};

export default GithubLogin;
