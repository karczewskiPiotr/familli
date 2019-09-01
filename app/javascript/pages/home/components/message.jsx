import React from "react";
import Fade from "react-reveal/Fade";

const Message = () => {
  return (
    <>
      <div className="introduction-wrapper">
        <Fade top delay={200}>
          <h4 className="introduction">INTRODUCING FAMILLI</h4>
        </Fade>
      </div>
      <div className="description-wrapper">
        <Fade bottom duration={1200}>
          <h1 className="description">
            The payment manager you'll enjoy using
          </h1>
        </Fade>
      </div>
    </>
  );
};

export default Message;
