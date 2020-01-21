import React, { useState, useEffect } from "react";
import axios from "axios";

const AddMemberForm = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    await axios.get("/api/v1/users/available").then(response => {
      const data = response.data.data;

      setUsers(data);
    });
  };

  useEffect(() => {
    fetchUsers();
    setLoading(false);
  }, []);

  return (
    <div className="search-wrapper">
      <form className="form">
        <input
          className="input-field"
          id="payment-amount"
          placeholder="Search..."
          disabled={loading}
        />
      </form>
      <div></div>
    </div>
  );
};

export default AddMemberForm;
