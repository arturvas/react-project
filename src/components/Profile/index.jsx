import "./profile.css";

const Profile = () => {
  const user = {
    name: "Artur Vasconcelos",
    avatar: "https://github.com/arturvas.png",
  };

  return (
    <div className="container">
      {/* {JSON.stringify(props)} */}
      <img className="profile-avatar" src={user.avatar} />
      <h3 className="profile-title">{user.name}</h3>
    </div>
  );
};

export default Profile;
