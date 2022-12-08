import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  function handleLogin(event) {
    fetch("http://localhost:4300/api/auth/login", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="login-container">
      <h3>Please login.</h3>
      <div className="login-form" action="">
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Email
          </label>
          <input
            onInput={(e) => {
              user.email = e.target.value;
              setUser(user);
            }}
            type="email"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="">
            Password
          </label>
          <input
            onInput={(e) => {
              user.password = e.target.value;
              setUser(user);
            }}
            type="password"
            className="form-control"
          />
        </div>

        <button
          onClick={handleLogin}
          type="submit"
          className="float-end btn btn-primary"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default Login;
