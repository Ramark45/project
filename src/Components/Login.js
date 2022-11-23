import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import avatar from './avatar.png'
import AuthService from "../Services/auth-service";
const  Login=()=> {
const navigate=useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    AuthService.login(username, password).then(
      () => {
        navigate("/home");
        window.location.reload();
      }
    );
};
  return (
    <div className="col-md-12">
      <div className="card card-container" style={{"border":"2px solid #24a4d8","borderRadius":"5px"}}>
        <img
          src={avatar}
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
                          />
          </div>
<br></br>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
              
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
