import React, { useState, useEffect } from "react";
import axios from 'axios';
const DeleteCard = () => {
  const [users,setUsers]=useState([
    {
      name:"",
      description:"",
      image:"",
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
   const deleteUser=async(id)=>{
    axios.delete(`http://localhost:8080/api/test/image/${id}`).then((response)=>{
    alert("Post Deleted Succesfully");
    setUsers(response.data);
    window.location.reload();
    AllUsers();
   });}
  return (
      <>
      <h3 style={{"fontFamily":"times new roman","textAlign":"center","color":"#24a4d8","fontWeight":"bold"}}>
        MANAGE YOUR HOME GALLERY
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
        <button className='btn btn-danger mx-2'
        onClick={() => deleteUser(user.id)}>Delete</button>
      </div>
    </div>
  </div>)})
}
</div>
      </>
  );
};

export default DeleteCard;