// import React from "react";

// JSON.stringfy = converter um objeto em string
// {JSON.stringify(props)}
// <button onClick={toggleFormVisibility}>Toggle form</button>

import styles from "./Profile.module.css";

const Profile = ({ userName }) => {
  return (
    <div className="container">
      <header className={styles.header}>
        <img
          className={styles.avatar}
          src={`https://github.com/${userName}.png`}
        />
        <h1 className={styles.name}>{userName}</h1>
      </header>
    </div>
  );
};

export default Profile;
