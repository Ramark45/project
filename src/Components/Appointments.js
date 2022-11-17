import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';
export default function Appointments() {
  const navigate=useNavigate()
    const [users,setUsers]=useState([
      {
        firstName : "",
        lastName : "",
        address:"",
        mobile:"",
        type:""
      }
    ]);
    const [status,setStatus]=useState([
      {
        status:"1"
      }
    ])
    useEffect(() => {
      AllUsers();
      updateStatus();
    }, []);
    const updateStatus = async () => {
      // e.preventDefault();
       await axios.put("http://localhost:8080/api/test/booking/status", users);
       alert("Appointment Accepted")
       navigate("/appointments")
     };

    const {id}=useParams();
    

    const AllUsers = async () => {
      axios.get('http://localhost:8080/api/test/booking/allbookings').then((response)=>{
         setUsers(response.data);
         console.log(response);
     })}
  
     const deleteUser=async(id)=>{
        axios.delete(`http://localhost:8080/api/test/booking/${id}`).then((response)=>{
        alert("Appointment Declined Succesfully");
        setUsers(response.data);
        window.location.reload();
        AllUsers();
       });
       
    }
    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">FIRST NAME</th>
      <th scope="col">LAST NAME</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">SHOOT TYPE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">APPOINTMENTS</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => {
    return( <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.address}</td>
                <td>{user.type}</td>
                <td>{user.mobile}</td>
                <td>
        {/* <Link className='btn btn-success mx-2' to={`/${user.id}`}>Accept</Link> */}
        <button className='btn btn-success mx-2' onClick={()=>updateStatus()}>Accept</button>
        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Decline</button>
      </td>
              </tr>
            )})}
  </tbody>
</table>
            </div>
            
        </div>
    )
}