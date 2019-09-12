import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import ClosePopUp from "../images/close_pop_up.svg";

const PopUp = ({ children, visibility, setVisibility }) => {
  const handleClose = () => {
    setVisibility(false);
  };

  return (
    <Fade when={visibility} duration={200} collapse>
      <div className="pop-up-wrapper">
        <Slide bottom duration={500} when={visibility} collapse>
          <div className="pop-up">
            <div className="close-btn-wrapper">
              <button className="close-btn" onClick={handleClose}>
                <img src={ClosePopUp} alt="Close pop up window button" />
              </button>
            </div>
            <div className="form-wrapper">{children}</div>
          </div>
        </Slide>
      </div>
    </Fade>
  );
};

export default PopUp;
