import React, { useState, useEffect } from "react";
import axios from "axios";
import AddIcon from "../../images/add_icon.svg";

const AddMemberForm = ({ currentUser, fetchMembers }) => {  
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPhrase, setSearchPhrase] = useState("");

  const fetchUsers = async () => {
    await axios.get("/api/v1/users/available").then(response => {
      const data = response.data.data;

      setUsers(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const UserResult = ({ user }) => {
    const handleInvite = async () => {
      await axios.post("/api/v1/invitations", {
        invitation: {
          user_id: user.id,
          familly_id: currentUser.familly.id
        }
      }).then(() => {
        fetchUsers();
        setSearchPhrase("")
        fetchMembers();
      })
    }

    return <div className="user" onClick={handleInvite}>
      <div className="user-image">
        <img src={user.profile_image} alt="user wuja" />
      </div>
      <div className="user-identity">{user.identity}</div>
      <div className="add-icon">
        <img src={AddIcon} alt="Add member icon." />
      </div>
    </div>
  }

  const getSearchResults = () => {
    const filteredUsers = users.filter(user => {
      return searchPhrase && user.identity.toLowerCase().includes(searchPhrase)
    })

    return filteredUsers.map(user => <UserResult key={user.id} user={user} />)
  }

  return !loading && (
    <div className="search-wrapper">
      <form className="form">
        <input
          className="input-field"
          id="payment-amount"
          placeholder="Search..."
          disabled={loading}
          onChange={event => { setSearchPhrase(event.target.value.toLowerCase()) }}
        />
      </form>
      <div className="search-results">
        {getSearchResults()}
      </div>
    </div>
  );
};

export default AddMemberForm;
