import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [login, setLogin] = useState({
    username: "",
    password: ""
  });
  console.log(login);

  const handleChanges = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //axios auth login post call to api
    axiosWithAuth()
      .post("/api/login", login)
      .then((response) => {
        //console.log(response);
        window.localStorage.setItem("token", response.data.payload);
      })
      .catch((error) => {
        //console.log(error);
      });
    //reset login form
    setLogin({
      username: "",
      password: ""
    });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={login.username}
            onChange={handleChanges}
          />
        </label>

        <label>
          Password:
          <input
            name="password"
            value={login.password}
            onChange={handleChanges}
          />
        </label>

        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
