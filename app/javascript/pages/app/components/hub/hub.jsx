import React, { useState } from "react";
import Tab from "../tab";
import Fade from "react-reveal/Fade";
import PopUp from "../pop_up";
import StartFamillyForm from "./start_familly_form";
import AddPaymentForm from "./add_payment_form";

const Hub = ({ isUserOwner, fetchUserData, members }) => {
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  const handleOnClick = () => {
    setPopUpVisibility(true);
  };

  return (
    <>
      <Tab>
        <h1>Hub</h1>
        {members.length > 0 && (
          <div top distance="10px" delay={600}>
            <div className="action-btn-wrapper">
              <button className="action-btn" onClick={handleOnClick}>
                {isUserOwner() ? "Add payment" : "Start a familly"}
              </button>
            </div>
          </div>
        )}
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
