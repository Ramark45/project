import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './Components/logo.png'
import Booking from "./Components/Booking";
import AuthService from "./Services/auth-service";
import Appointments from "./Components/Appointments";
import Login from "./Components/Login";
//import Register from "./components/Register";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import BoardUser from "./Components/BoardUser";
//import BoardModerator from "./components/BoardModerator";
import AdminBoard from "./Components/AdminBoard";
import DeleteCard from "./Components/DeleteCard";
import Signup from "./Components/Signup";
import Status from "./Components/Status";
const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [getUserBoard, setUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
      setUserBoard(user.roles.includes("ROLE_USER"));
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark" style={{"backgroundColor":"#24a4d8","height":"70px"}}>
        <img src={logo} style={{"height":"70px","width":"120px","paddingLeft":"10px"}}/>
        <div className="navbar-nav mr-auto">
          <li className="nav-item" >
            <Link to={"/home"} className="nav-link">
              HOME
            </Link>
          </li>
          {showAdminBoard && (
            <>
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                ADD POST
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/deletecard"} className="nav-link">
                DELETE POST
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/appointments"} className="nav-link">
                APPOINTMENTS
              </Link>
            </li>
            </>
          )} 


{getUserBoard && (
            <>
            <li className="nav-item">
              <Link to={"/Booking"} className="nav-link">
                BOOK APPOINTMENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/status"} className="nav-link">
                CHECK STATUS
              </Link>
            </li>
            </>
          )} 
          </div>
          
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            {/* <li className="nav-item">
              <Link to={"/profile"} className="nav-link" style={{"textTransform":"uppercase"}}>
                {currentUser.username}
              </Link>
            </li> */}
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LOGOUT
              </a>
            </li>
          </div>
        
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/signup"} className="nav-link">
                SIGN UP
              </Link>
            </li>

          </div>
        )}
      </nav>
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/booking" element={<Booking/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/status" element={<Status/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin" element={<AdminBoard/>} />
          <Route path="/Appointments" element={<Appointments/>}></Route>
          <Route path="/deletecard" element={<DeleteCard/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;