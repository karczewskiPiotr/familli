import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Invitation from './invitation'
import InvitationsIcon from "../../images/invitations.svg"

const Invitations = ({ fetchMembers, fetchUserData }) => {
  const [invitations, setInvitations] = useState([])

  const fetchInvitations = async () => {
    await axios.get("api/v1/invitations").then(response => {
      const data = response.data.data;

      setInvitations(data);
    })
  }

  useEffect(() => {
    fetchInvitations();
  }, [])

  return (
    <div className="invitations-wrapper">
      <div className="invitations-header">
        <div className="invitations-icon">
          <img src={InvitationsIcon} alt="Invitations icon." />
        </div>
        <div>Invitations to familly</div>
      </div>
      {invitations.map(invitation => <Invitation
        key={invitation.id}
        data={invitation}
        fetchUserData={fetchUserData}
        fetchInvitations={fetchInvitations}
        fetchMembers={fetchMembers}
        />
      )}
    </div>
  )
}

export default Invitations;
