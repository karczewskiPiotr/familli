import React from "react";

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <a href="/users/sign_out" data-method="delete">
        Log out!
      </a>
    </>
  );
};

export default Profile;
