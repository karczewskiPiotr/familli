import React from "react";
import Slide from "react-reveal/Slide";
import LogoImg from "../images/logo.svg";

const Logo = () => {
  return (
    <div className="logo-wrapper hvr-buzz-out">
      <Slide right>
        <img src={LogoImg} alt="Familli logo." className="logo" />
      </Slide>
    </div>
  );
};

export default Logo;
