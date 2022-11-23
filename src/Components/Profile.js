
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AuthService from "../Services/auth-service";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();
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
     

  return (
    <>

<h4 className="mb-5 text-uppercase" style={{"fontFamily":"times new roman","color":"red","fontWeight":"bold"}}>Your Appointment Status</h4>
        <div className='container'>
            <div className='py-4'>
            <table className="table border shadow table table-striped">
  <thead style={{"backgroundColor":"#24a4d8"}}>
    <tr>
      <th scope="col">NAME</th>
      <th scope="col">ADDRESS</th>
      <th scope="col">SHOOT TYPE</th>
      <th scope="col">DATE</th>
      <th scope="col">AMOUNT</th>
      <th scope="col">STATUS</th>
      <th scope="col">PAYNOW</th>
    </tr>
  </thead>
  <tbody>
      {users.map((user)=>{
        console.log(user.firstName)
        console.log(currentUser.username)
        if(user.firstName===currentUser.username){
          return(
            <>
            
            <tr>
                <td style={{"textTransform":"uppercase"}}>{user.firstName}</td>
                <td>{user.address}</td>
                <td>{user.type}</td>
                <td>{user.date}</td>
                <td>Rs.{user.amount}</td>
                <td style={{"color":"green"}}>{user.info}</td>
                <td> <Link className='btn btn-outline-success mx-2' to={`/payment`}>PAY</Link></td>
                <td>
      </td>
              </tr>
            </>
          )
        }
      })}
      </tbody>
</table>
            </div>
        </div>
    </>
  );
};

export default Profile;