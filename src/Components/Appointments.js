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
        type:"",
        info:"",
        city:"",
        date:""
      }
    ]);
    useEffect(() => {
      AllUsers();

    }, []);

    const {id}=useParams();
    
    const AllUsers = async () => {
      axios.get('http://localhost:8080/api/test/booking').then((response)=>{
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
      <th scope="col">STATUS</th>
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
                <td>{user.info}</td>
                <td>
        {/* <Link className='btn btn-success mx-2' to={`/${user.id}`}>Accept</Link> */}
        {/* <button className='btn btn-success mx-2'>Accept</button> */}
        {/* <button className='btn btn-primary mx-2' onClick={()=>navigateToViewAppointment(user)}>View</button> */}
        {/* <Link className='btn btn-outline-primary mx-2' to={`/navigateToViewAppointment/${user}`}>Edit</Link> */}
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