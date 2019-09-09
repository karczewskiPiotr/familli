import React, { useState, useEffect } from "react";
import axios from "axios";
import Tab from "../tab";

const Profile = () => {
  const [user, setUser] = useState({});

  const fetchUserData = () => {
    axios.get("/api/v1/users/current").then(response => {
      const data = response.data.data;

      setUser({
        identity: data.identity,
        email: data.email,
        status: data.status,
        profile_image: data.profile_image
      });
    });
  };

  useEffect(fetchUserData, []);

  return (
    <Tab>
      <div className="profile-wrapper">
        <div className="image-wrapper">
          <img src={user.profile_image} alt="Profile image" className="image" />
        </div>
        <h3 className="identity">{user.identity}</h3>
        <h6 className="status">{user.status}</h6>
        <div className="sign-out-btn-wrapper">
          <a
            href="/users/sign_out"
            data-method="delete"
            className="sign-out-btn hvr-ripple-out"
          >
            Log out
          </a>
        </div>
      </div>
    </Tab>
  );
};

export default Profile;
