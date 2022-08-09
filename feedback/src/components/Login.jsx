import React from "react";
import { useContext } from "react";
import Button from "./shared/Button";
import Input from "./shared/Input";
import { UserContext } from "./context/UserContext";

function Login() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [disabledLoginBtn, setDisabledLoginBtn] = React.useState(true);
  const { login, token } = useContext(UserContext);
  const handleUsername = (e) => {
    setUsername(e.target.value);
    if (e.target.value && password) {
      setDisabledLoginBtn(false);
    } else if (!password || !e.target.value) {
      setDisabledLoginBtn(true);
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (username && e.target.value) {
      setDisabledLoginBtn(false);
    } else if (!username || !e.target.value) {
      setDisabledLoginBtn(true);
    }
  };
  const doLogin = () => {
    login(username, password);
    if (!token) {
      setMessage("*Please check your username and password ");
    }
  };

  return (
    <div className="container p-5">
      <div className="login-container my-5 card p-5">
        <h3> User Login</h3>
        <Input
          label="Username"
          placeholder="Enter your Username"
          value={username}
          onChange={handleUsername}
          required={true}
        />
        <Input
          label="Password"
          placeholder="Enter your Password"
          type="password"
          value={password}
          onChange={handlePassword}
          required={true}
        />
        <div className="row">
          <div className="col-md-6 offset-md-2">
            <Button
              type="submit"
              className="btn btn-primary"
              disabled={disabledLoginBtn}
              onClick={doLogin}
            >
              Login
            </Button>
            <span className="login-message ms-2">{message}</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex flex-row justify-content-between">
          <div>
            <div className="form-text">Username : samiksha</div>
            <div className="form-text">Password : samiksha</div>
          </div>
          <div>OR</div>
          <div>
            <div className="form-text">Username : bishal</div>
            <div className="form-text">Password : bishal</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
