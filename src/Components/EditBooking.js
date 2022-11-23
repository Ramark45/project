import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";

export default function EditBooking() {
  let navigate = useNavigate();

  const {id}=useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    address: "",
    mobile:"",
    city:"",
    type:"",
    date:"",
    info:"",
    amount:""
  });

  const { firstName, lastName, address,mobile,city,type,date,info,amount } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadUser();
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/test/booking/${id}`, user).then((response)=>{
        setUser(response.data);
        alert("Appointment Updated")
    navigate("/");
        console.log(response);
    })
    
  };

  const loadUser=async()=>{
   await axios.get(`http://localhost:8080/api/test/booking/${id}`).then((response)=>{
        setUser(response.data);
        console.log(response);
    })
  }

  return (
    <><form onSubmit={(e) => onSubmit(e)}>
        <div className="card card-registration my-4">
          <div className="row g-0">
            
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Update an Appointment</h3>

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
                  <input type="date" name="date" value={date} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Date of Birth" />
                </div>
                <div className="form-outline mb-4">
                  <input type="text" id="form3Example9" name="amount" value={amount} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Bill Amount"/>
                </div>
                <div className="form-outline mb-4">
                <select className="form-select" name="info" value={info} onChange={(e) => onInputChange(e)}>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approve</option>
                      <option value="Declined">Decline</option>
                    </select>
                  {/* <input type="text-area" id="form3Example97" name="info" value={info} onChange={(e) => onInputChange(e)} class="form-control form-control-lg" placeholder="Additinal Information if Any"/> */}
                </div>
                
                <div className="d-flex justify-content-end pt-3">
                  {/* <button type="button" class="btn btn-light btn-lg">Reset all</button> */}
                  <button type="submit" class="btn btn-warning btn-lg ms-2">Update Status</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </form></>
  );
}