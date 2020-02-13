import React from 'react'
import DeleteIcon from '../../images/delete_icon.svg'
import axios from 'axios'

const Member = ({ member, fetchMembers }) => {
  const handleDelete = async () => {
    await axios.delete(`/api/v1/invitations/${member.invitation_id}`).then(fetchMembers)
  }

  return (
    <div className="member-wrapper">
      <div className="profile-image">
        <img src={member.profile_image} alt="Member profile picture." />
      </div>
      <div className="details">
        <div className="identity">
          {member.identity}
        </div>
        <div className="subscription-info">
          Pending invitation
        </div>
      </div>
      <div className="delete-invite" onClick={handleDelete}>
        <img src={DeleteIcon} alt="Delete member icon." />
      </div>
    </div>
  )
}

export default Member;