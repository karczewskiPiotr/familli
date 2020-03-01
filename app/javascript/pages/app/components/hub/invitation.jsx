import React from 'react'
import axios from 'axios'

const Invitation = ({ data, fetchUserData, fetchInvitations, fetchMembers }) => {
  const owner = data.familly.owner

  const declineInvitation = async () => {
    await axios.patch(`/api/v1/invitations/${data.id}/decline`).then(() => {
      fetchInvitations();
      fetchUserData();
      fetchMembers();
    })
  }

  const acceptInvitation = async () => {
    await axios.patch(`/api/v1/invitations/${data.id}/accept`).then(() => {
      fetchInvitations();
      fetchUserData();
      fetchMembers();
    })
  }

  return (
    <div className="invitation">
      <div>
        <img src={owner.profile_image} alt="Familly owner image" />
      </div>
      <div className="owner-identity">{owner.identity}</div>
      <div className="message">invited you to his familly</div>
      <div className="btns-wrapper">
        <div>
          <button className="decline-btn btn" onClick={declineInvitation}>Decline</button>
        </div>
        <div>
          <button className="accept-btn btn" onClick={acceptInvitation}>Accept</button>
        </div>
      </div>
    </div>
  )
}

export default Invitation;