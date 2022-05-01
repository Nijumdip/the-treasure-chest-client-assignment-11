import React from "react";
import { Button } from "react-bootstrap";
import auth from "../../../Firebase/Firebase.init";
import { useSignInWithGithub } from "react-firebase-hooks/auth";

const GithubLogin = () => {
    const [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    
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
