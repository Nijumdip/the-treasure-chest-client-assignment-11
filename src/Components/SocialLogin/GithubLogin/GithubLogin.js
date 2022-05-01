import React from "react";
import { Button } from "react-bootstrap";

const GithubLogin = () => {
  return (
    <div className="d-flex flex-row justify-content-center">
      <Button style={{ width: "300px" }} variant="secondary">
              <img
                  width='30px'
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
