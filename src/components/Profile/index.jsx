import React from "react";
import "./profile.css";

const Profile = ({ address, name, toggleFormVisibility }) => {
  return (
    <div className="container">
      {/* JSON.stringfy = converter um objeto em string */}
      {/* {JSON.stringify(props)} */}
      <img className="profile-avatar" src={address} />
      <h3 className="profile-title">{name}</h3>
      <button onClick={toggleFormVisibility}>Toggle form</button>
    </div>
  );
};

export default Profile;
