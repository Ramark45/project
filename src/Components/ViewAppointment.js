// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useLocation } from "react-router-dom";
// import { Link,useNavigate,useParams } from 'react-router-dom';
// export default function Appointments() {
//   const navigate=useNavigate()
//       const location = useLocation();

//   const currentfirstName = location.state.firstName;
//   const currentlastName = location.state.lastName;
//   const currentAddress = location.state.address;
//   const currentMobile = location.state.mobile;
//   const currentCity = location.state.city;
//   const currentType = location.state.type;
//   const currentInfo = location.state.info;
//   const currentDate = location.state.date;

//   console.log(currentfirstName);
//   console.log(currentlastName);
//   console.log(currentAddress);
//   console.log(currentMobile);
//   console.log(currentCity);
//   console.log(currentType);
//   console.log(currentInfo);
//   console.log(currentDate);

//   const booking = [
//     {

//       firstName :currentfirstName ,
//       lastName : currentlastName,
//       address:currentAddress,
//       mobile:currentMobile,
//       type:currentType,
//       info:currentInfo,
//       city:currentCity,
//       date:currentDate,
//     //   id:currentId
//     }]
//     const {id}=useParams();
//     const updateStatus = async (id) => {
//         console.log(id)
//        await axios.put(`http://localhost:8080/api/test/booking/${id}`,booking );
//        alert("Appointment Accepted")
//        navigate("/appointments")
//      };

    
//     //  const deleteUser=async(id)=>{
//     //     axios.delete(`http://localhost:8080/api/test/booking/${id}`).then((response)=>{
//     //     alert("Appointment Declined Succesfully");
//     //     setUsers(response.data);
//     //     window.location.reload();
//     //     // AllUsers();
//     //    });
       
//     // }
//     return (
//         <div className='container'>
//             <div className='py-4'>
//             <table className="table border shadow">
//   <thead>
//     <tr>
//       <th scope="col">ID</th>
//       <th scope="col">FIRST NAME</th>
//       <th scope="col">LAST NAME</th>
//       <th scope="col">ADDRESS</th>
//       <th scope="col">SHOOT TYPE</th>
//       <th scope="col">MOBILE</th>
//       <th scope="col">CITY</th>
//       <th scope="col">STATUS</th>
//       <th scope="col">ACTION</th>
//     </tr>
//   </thead>
//   <tbody>
//   {booking.map((user, index) => {
//     return( <tr>
//                 <th scope="row" key={index}>{index+1}</th>
//                 <td>{user.firstName}</td>
//                 <td>{user.lastName}</td>
//                 <td>{user.address}</td>
//                 <td>{user.type}</td>
//                 <td>{user.mobile}</td>
//                 <td>{user.city}</td>
//                 <td>{user.info}</td>
//                 <td>
//         {/* <Link className='btn btn-success mx-2' to={`/${user.id}`}>Accept</Link> */}
//         <button className='btn btn-success mx-2' onClick={()=>updateStatus(user.id)}>UPDATE</button>
//       </td>
//               </tr>
//             )})}
//   </tbody>
// </table>
//             </div>
            
//         </div>
//     )
// }