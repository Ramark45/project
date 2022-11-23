import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import avatar from './avatar.png'
const Signup = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { email, username, password } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user.description);
    console.log(user.name);
    console.log(user.image);

     await axios.post("http://localhost:8080/api/auth/signup",user);
     alert("Registered Succesfully")
     navigate("/")
   };

  return (
    <div className="col-md-12" style={{"margin-top":" -20px"}}>
      <div className="card card-container" style={{"border":"2px solid #24a4d8","borderRadius":"5px","height":"440px"}}>
        <img
          src={avatar}
          alt="profile-img"
          className="profile-img-card"
        />

        <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
            <label htmlFor="username">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) =>onInputChange(e)}
              
            />
          </div>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={(e) =>onInputChange(e)}
              
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={(e) =>onInputChange(e)}
                          />
          </div>
<br></br>
          <div className="form-group">
            <button className="btn btn-primary btn-block">
              
              <span>Signup</span>
            </button><br></br>
          </div>

          {/* {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )} */}
          {/* <CheckButton style={{ display: "none" }} ref={checkBtn} /> */}
        </form>
      </div>
    </div>
  );
};

export default Signup;