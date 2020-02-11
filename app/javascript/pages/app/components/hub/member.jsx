import React from 'react'

const Member = ({ member }) => {
  return (
    <div className="member-wrapper">
      <div className="profile-image">
        <img src={member.profile_image} alt="Add member icon." />
      </div>
      <div className="details">
        <div className="identity">
          {member.identity}
        </div>
        <div className="subscription-info">
          Pending invitation
        </div>
      </div>
    </div>
  )
}

export default Member;