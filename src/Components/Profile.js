import React from "react";
import AuthService from "../Services/auth-service";

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3 >
          <strong >{currentUser.username}</strong> Profile
        </h3>
      </header>
    </div>
  );
};

export default Profile;