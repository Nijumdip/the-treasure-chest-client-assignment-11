import { Button } from "react-bootstrap";
import auth from "../../firebase.init";
import { useSignInWithGoogle, useAuthState } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../../SharedPage/LoadingSpinner/LoadingSpinner";

const GoogleLogin = () => {
  const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] =
    useSignInWithGoogle(auth);
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  let errorElement;

  if (user || userGoogle) {
    navigate(from, { replace: true });
  }
  if (loading || loadingGoogle) {
    return <LoadingSpinner></LoadingSpinner>
  }
  if (error || errorGoogle) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message}
          {errorGoogle?.message}
        </p>
      </div>
    );
  }

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
      {errorElement}
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
