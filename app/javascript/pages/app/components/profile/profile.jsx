import React from "react";
import Tab from "../tab";

const Profile = () => {
  return (
    <Tab>
      <h1>Profile</h1>
      <a href="/users/sign_out" data-method="delete">
        Log out!
      </a>
    </Tab>
  );
};

export default Profile;
