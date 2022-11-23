import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./Components/Footer";
import logo from './Components/logo.png'
import Booking from "./Components/Booking";
import EditBooking from "./Components/EditBooking"
import AuthService from "./Services/auth-service";
import Appointments from "./Components/Appointments";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import AdminBoard from "./Components/AdminBoard";
import DeleteCard from "./Components/DeleteCard";
import Signup from "./Components/Signup";
import Payment from "./Components/Payment";
import Protected from "./Components/Protected";
const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [getUserBoard, setUserBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
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
        <img src={logo} style={{"height":"70px","width":"120px","paddingLeft":"10px"}} alt="logo"/>
        <div className="navbar-nav mr-auto">
        
          <li className="nav-item" >
            <Link to={"/home"} className="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
  <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
</svg>
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
              <Link to={"/profile"} className="nav-link">
                CHECK STATUS
              </Link>
            </li>
            </>
          )} 
          </div>
          
        {currentUser ? (<>
          <div className="navbar-nav ml-auto">
            
            <li className="nav-item" style={{"marginLeft":"600px"}}>
              <a href="/login" className="nav-link" onClick={logOut}>
              LOGOUT <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
  <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
</svg>
              </a>
            </li>

          </div>
        </>
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
          <Route path="/login" element={<Protected Component={Login}/>} />
          <Route path="/signup" element={<Protected Component={Signup}/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/payment" element={<Payment/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/admin" element={<AdminBoard/>} />
          <Route path="/Appointments" element={<Appointments/>}></Route>
          <Route path="/editBooking/:id" element={<EditBooking/>}></Route>
          <Route path="/deletecard" element={<DeleteCard/>}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;