import "./profile.css";

const Profile = ({ address, name }) => {
  return (
    <div className="container">
      {/* JSON.stringfy = converter um objeto em string */}
      {/* {JSON.stringify(props)} */}
      <img className="profile-avatar" src={address} />
      <h3 className="profile-title">{name}</h3>
    </div>
  );
};

export default Profile;
