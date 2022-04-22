import React from "react";
import { UserObject } from "../../Context/UserContext";

import styles from "./profile.module.scss";

const Profile = () => {
  const { username } = UserObject();
  return (
    <div className={styles.appContainer}>
      Profile
      <div className={styles.showProfileContainer}>USERNAME: {username}</div>
    </div>
  );
};

export default Profile;
