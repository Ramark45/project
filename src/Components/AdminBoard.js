import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import UserService from "../Services/user-service";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import authHeader from "../Services/auth-header";
const AdminBoard = () => {
  const [content, setContent] = useState("");

  let navigate = useNavigate();
  const [users,setUsers]=useState([]);

    const {id}=useParams();

  const [user, setUser] = useState({
    name: "",
    description: "",
    image: "",
  });

  const { name, description, image } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);
    oFReader.onload = function (oFREvent) {

      user.image = oFREvent.target.result;
    };
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user.description);
    console.log(user.name);
    console.log(user.image);

     await axios.post("http://localhost:8080/api/test/image",user);
     alert("Image Added Succesfully")
     navigate("/")
   };

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          (error.message) ||
          (error.toString());

        setContent(_content);
    }
    );
  }, []);

  return (
    <div className="container" >
      <header className="jumbotron">
        {/* <h3>{content}</h3> */}
      </header>

      <div className="row" >
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Images</h2>

          <form onSubmit={(e) => onSubmit(e)} >
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Your Image Title"
                name="name"
                value={name}
                onChange={(e) =>onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Short Description"
                name="description"
                value={description}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Address" className="form-label">
                Upload Image
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Choose Image"
                name="image"
                // value={image}
                accept="image/*"
                onChange={(e) => PreviewImage(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>

  );
};

export default AdminBoard;