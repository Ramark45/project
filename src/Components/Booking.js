import "../App.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cameraman from './cameraman.jpg';
import AuthService from "../Services/auth-service";
 const Booking=()=>{
  const pastdate=new Date();
  var tdate;
  var tmonth;
  var tyear=pastdate.getFullYear();
  if(pastdate.getDate()<10){
    tdate="0"+pastdate.getDate()
  }
  else{
    tdate=pastdate.getDate()
  }
  if(pastdate.getMonth()<10){
    tmonth="0"+(pastdate.getMonth()+1)
  }
  else{
    tmonth=pastdate.getMonth()+1
  }
  const currdate=tyear+"-"+tmonth+"-"+tdate
  const currentUser = AuthService.getCurrentUser();
  let navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: currentUser.username,
    lastName: "",
    address: "",
    city:"",
    type:"",
    mobile:"",
    date:"",
    info:"Pending",
    amount:"0"
  });
  
  const { firstName, lastName, address,type,mobile,date ,city,info,amount} = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
   e.preventDefault();
    await axios.post("http://localhost:8080/api/test/booking", user);
    alert("Appointment Submitted Successfully")
    navigate("/")
  };
    return(
        <><form onSubmit={(e) => onSubmit(e)}>
<section className="h-100 bg-dark" >
  <div className="container py-5 h-100" style={{"backgroundColor":"white"}}>
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img src={cameraman} alt="cameraman"
                className="img-fluid"
                style={{"border-top-left-radius": ".25rem","border-bottom-left-radius": ".25rem","height":"540px","width":"500px"}} />
            </div>
            
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase" style={{"fontFamily":"times new roman","color":"red","fontWeight":"bold"}}>Book an Appointment</h3>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="firstName" value={firstName}  id="form3Example1m" class="form-control form-control-lg" placeholder="First name" />
            
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" name="lastName" value={lastName} onChange={(e) => onInputChange(e)} id="form3Example1n" class="form-control form-control-lg" placeholder="Last name" />
                      
                    </div>
                  </div>
                </div>

               
                <div className="form-outline mb-4">
                  <input type="text" name="address" value={address} onChange={(e) => onInputChange(e)} id="form3Example8" className="form-control form-control-lg" placeholder="Address"/>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">

                    <select className="form-select" aria-label="size 3 select example" name="type" value={type} onChange={(e) => onInputChange(e)}>
                      <option value="Other">Shoot Type</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Outdoor">Outdoor</option>
                      <option value="Birthday">Birthday</option>
                    </select>

                  </div>
                  <div className="col-md-6 mb-4">

                    <select className="form-select" name="city" value={city} onChange={(e) => onInputChange(e)}>
                      <option value="Other">City</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Hyderabed">Hyderabed</option>
                      <option value="Mumbai">Mumbai</option>
                    </select>

                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" name="mobile" value={mobile} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Phone Number"/>
                </div>

                <div className="form-outline mb-4">
                  <input type="date" name="date" min={currdate} value={date} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Date of Birth" />
                </div>

                <div className="form-outline mb-4" style={{"display":"none"}}>
                  <input type="text-area" id="form3Example97" name="info" value={info} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Status"/>
                </div>
                <div className="form-outline mb-4" style={{"display":"none"}}>
                  <input type="text-area" id="form3Example97" name="amount" value={amount} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Amount"/>
                </div>
                
                <div className="d-flex justify-content-end pt-3">
                  {/* <button type="button" class="btn btn-light btn-lg">Reset all</button> */}
                  <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section></form></>
    );
}
export default Booking;