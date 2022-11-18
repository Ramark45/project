import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link,useNavigate,useParams } from 'react-router-dom';
export default function Appointments() {
    const {id}=useParams();
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
    //   console.log(users.id)
      useEffect(() => {
        AllUsers();
  
      }, []);
      const AllUsers = async () => {
        axios.get(`http://localhost:8080/api/test/booking`).then((response)=>{
           setUsers(response.data);
           console.log(response);
       })}
    return (
        <>
        <h4 className="mb-5 text-uppercase" style={{"fontFamily":"times new roman","color":"red","fontWeight":"bold"}}>Your Appointment Status</h4>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">S.NO</th>
      <th scope="col">FIRST NAME</th>
      <th scope="col">LAST NAME</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">SHOOT TYPE</th>
      <th scope="col">DATE</th>
      <th scope="col">STATUS</th>
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
                <td>{user.date}</td>
                <td style={{"color":"green"}}>{user.info}</td>
                <td>
      </td>
              </tr>
            )})}
  </tbody>
</table>
            </div>
        </div>
        </>
    )
}