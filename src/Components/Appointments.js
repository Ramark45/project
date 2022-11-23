import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Appointments() {
    const [users,setUsers]=useState([
      {
        firstName : "",
        lastName : "",
        address:"",
        mobile:"",
        type:"",
        info:"",
        city:"",
        date:"",
        amount:""
      }
    ]);
    useEffect(() => {
      AllUsers();

    }, []);
    
    const AllUsers = async () => {
      axios.get(`http://localhost:8080/api/test/booking`).then((response)=>{
         setUsers(response.data);
         console.log(response);
     })}
  
     const deleteUser=async(id)=>{
        axios.delete(`http://localhost:8080/api/test/booking/${id}`).then((response)=>{
        alert("Appointment Deleted Succesfully");
        setUsers(response.data);
        window.location.reload();
        AllUsers();
       });
       
    }
    return (
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow table table-striped">
  <thead style={{"backgroundColor":"#24a4d8"}}>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">FIRST NAME</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">SHOOT TYPE</th>
      <th scope="col">MOBILE</th>
      <th scope="col">STATUS</th>
      <th scope="col">APPOINTMENTS</th>
    </tr>
  </thead>
  <tbody>
  {users.map((user, index) => {
    return( <tr>
                <th scope="row" key={index}>{index+1}</th>
                <td>{user.firstName}</td>
                <td>{user.address}</td>
                <td>{user.type}</td>
                <td>{user.mobile}</td>
                <td>{user.info}</td>
                <td>
        <Link className='btn btn-outline-success mx-2' to={`/editBooking/${user.id}`}>Update</Link>
        <button className='btn btn-danger mx-2' onClick={()=>deleteUser(user.id)}>Delete</button>
      </td>
              </tr>
            )})}
  </tbody>
</table>
            </div>
            
        </div>
    )
}