import { Button } from "react-bootstrap";
import auth from "../../firebase.init";
import { useSignInWithGithub, useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../SharedPage/LoadingSpinner/LoadingSpinner";

const GithubLogin = () => {
  const [signInWithGithub, userGithub, loadingGithub, errorGithub] =
    useSignInWithGithub(auth);
  const [user, loading, error] = useAuthState(auth);
  let errorElement;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  

  if (user || userGithub) {
    navigate(from, { replace: true });
  }
  if (loading || loadingGithub) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (error || errorGithub) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {errorGithub?.message}
        </p>
      </div>
    );
  }


  const handleLogin = () => {
    signInWithGithub();
  };

  return (
    <div>
    {errorElement}
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
    </div>
  );
};

export default GithubLogin;
