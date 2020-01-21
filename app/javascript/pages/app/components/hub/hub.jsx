import React, { useState } from "react";
import Tab from "../tab";
import Fade from "react-reveal/Fade";
import PopUp from "../pop_up";
import StartFamillyForm from "./start_familly_form";
import AddPaymentForm from "./add_payment_form";
import Assistant from "../assistant";
import AddMember from "./add_member";
import AddMemberForm from "./add_member_form";

const Hub = ({ isUserOwner, fetchUserData, members, fetchMembers }) => {
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
        return <AddMemberForm />
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
        {members.length < 5 && (
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
