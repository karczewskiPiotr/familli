import React from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

const PopUp = ({ children, visibility, setVisibility }) => {
  const handleOutsideClick = () => {
    setVisibility(false);
  };

  return (
    <Fade when={visibility} duration={200} collapse>
      <div className="pop-up-wrapper" onClick={handleOutsideClick}>
        <Slide bottom duration={500} when={visibility} collapse>
          <div className="pop-up">{children}</div>
        </Slide>
      </div>
    </Fade>
  );
};

export default PopUp;
