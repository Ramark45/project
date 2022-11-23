import React, { useState, useEffect } from "react";
import axios from 'axios';
const Home = () => {
  
  const [users,setUsers]=useState([
    {
      name:"",
      description:"",
      image:""
    }
  ]);
  useEffect(() => {
    AllUsers();
  }, []);

  const AllUsers = async () => {
    axios.get('http://localhost:8080/api/test/image/allimages').then((response)=>{
       setUsers(response.data);
       console.log(response);
   })}
  
  return (
      <>
      <h3 style={{"fontFamily":"times new roman","textAlign":"center","color":"#24a4d8","fontWeight":"bold"}}>
        MY PHOTO SHOOTS
      </h3>
      <div className="row row-cols-1 row-cols-md-3 g-4">
  {
  users.map((user)=>{
    return(
    <div className="col">
    <div className="card">
      <img src={user.image} class="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <p className="card-text">{user.description}</p>
      </div>
    </div>
  </div>)})
}
</div>
      </>
  );
};

export default Home;