import React, { useState } from "react";
import Tab from "../tab";
import Fade from "react-reveal/Fade";
import PopUp from "../pop_up";
import StartFamillyForm from "./start_familly_form";
import AddPaymentForm from "./add_payment_form";
import Assistant from "../assistant";
import AddMember from "./add_member";
import AddMemberForm from "./add_member_form";
import Member from "./member";

const Hub = ({ user, isUserOwner, fetchUserData, members, fetchMembers }) => {
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  const getInitialPopUpMode = () => {
    return isUserOwner() ? "payment" : "familly";
  };

  const [popUpMode, setPopUpMode] = useState(getInitialPopUpMode());

  const getPopUpContent = () => {
    switch (popUpMode) {
      case "payment":
        return <AddPaymentForm members={members} />;
      case "familly":
        return (
          <StartFamillyForm
            setVisibility={setPopUpVisibility}
            fetchUserData={fetchUserData}
          />
        );
      case "search":
        return <AddMemberForm currentUser={user} fetchMembers={fetchMembers} />
    }
  };

  const resetPopUpContent = () => {
    setPopUpMode(getInitialPopUpMode());
  };

  const showPopUp = () => {
    setPopUpVisibility(true);
  };

  return (
    <>
      <Tab>
        <Assistant />
        <div className="members">
          {members.map(member => <Member key={member.id} member={member} fetchMembers={fetchMembers} />)}
        </div>
        {(members.length < 5 && isUserOwner()) && (
          <AddMember setPopUpMode={setPopUpMode} showPopUp={showPopUp} />
        )}
        <Fade top distance="10px" delay={600}>
          <div className="action-btn-wrapper">
            <button className="action-btn" onClick={showPopUp}>
              {isUserOwner() ? "Add payment" : "Start a familly"}
            </button>
          </div>
        </Fade>
      </Tab>
      <PopUp
        visibility={popUpVisibility}
        setVisibility={setPopUpVisibility}
        onClose={resetPopUpContent}
      >
        {getPopUpContent()}
      </PopUp>
    </>
  );
};

export default Hub;
