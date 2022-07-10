import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


function Login(props) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  async function login(e) {
    e.preventDefault();
    await axios
      .post(
        `/api/Account/Login`,
        {
          Email: email,
          Password: password,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then(function (response) {
        if (response.status === 200) {
          localStorage.setItem("token", JSON.stringify(response.data));
          props.user(localStorage.getItem("token"));
          navigate("/famouscitytable");
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
              })
        }
      })
      .catch(function (error) {});
  }
  return (
    <div className="container">
      <div className="wrapper">
        <form className="p-3 mt-3" onSubmit={(e) => login(e)}>
          <div className="form-field d-flex align-items-center">
            <span className="far fa-user"></span>
            <input
              type="text"
              name="userName"
              id="userName"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="form-field d-flex align-items-center">
            <span className="fas fa-key"></span>
            <input
              type="password"
              name="password"
              id="pwd"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button className="btn mt-3" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
