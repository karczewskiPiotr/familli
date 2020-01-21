import React, { useState } from "react";
import Tab from "../tab";
import Fade from "react-reveal/Fade";
import PopUp from "../pop_up";
import StartFamillyForm from "./start_familly_form";
import AddPaymentForm from "./add_payment_form";
import Assistant from "../assistant";
import AddMember from "./add_member";

const Hub = ({ isUserOwner, fetchUserData, members }) => {
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  const handleOnClick = () => {
    setPopUpVisibility(true);
  };

  return (
    <>
      <Tab>
        <Assistant />
        {members.length < 5 && <AddMember />}
        <Fade top distance="10px" delay={600}>
          <div className="action-btn-wrapper">
            <button className="action-btn" onClick={handleOnClick}>
              {isUserOwner() ? "Add payment" : "Start a familly"}
            </button>
          </div>
        </Fade>
      </Tab>
      <PopUp visibility={popUpVisibility} setVisibility={setPopUpVisibility}>
        {isUserOwner() ? (
          <AddPaymentForm members={members} />
        ) : (
          <StartFamillyForm
            setVisibility={setPopUpVisibility}
            fetchUserData={fetchUserData}
          />
        )}
      </PopUp>
    </>
  );
};

export default Hub;
