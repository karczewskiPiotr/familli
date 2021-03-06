import React from "react";
import AddIcon from "../../images/add_member.svg";

const AddMember = ({ setPopUpMode, showPopUp }) => {
  const handleOnClick = () => {
    setPopUpMode("search");
    showPopUp();
  };

  return (
    <>
      <div className="add-member-wrapper" onClick={handleOnClick}>
        <div className="add-icon">
          <img src={AddIcon} alt="Add member icon." />
        </div>
        <div>Add member</div>
      </div>
    </>
  );
};

export default AddMember;
