import React, { useState } from "react";
import Tab from "../tab";
import Fade from "react-reveal/Fade";
import PopUp from "../pop_up";
import StartFamillyForm from "./start_familly_form";

const Hub = () => {
  const [popUpVisibility, setPopUpVisibility] = useState(false);

  const handleStartFamilly = () => {
    setPopUpVisibility(true);
  };

  return (
    <>
      <Tab>
        <h1>Hub</h1>
        <Fade top distance="10px" delay={600}>
          <div className="start-familly-btn-wrapper">
            <button className="start-familly-btn" onClick={handleStartFamilly}>
              Start a familly
            </button>
          </div>
        </Fade>
      </Tab>
      <PopUp visibility={popUpVisibility} setVisibility={setPopUpVisibility}>
        <StartFamillyForm setVisibility={setPopUpVisibility}/>
      </PopUp>
    </>
  );
};

export default Hub;
