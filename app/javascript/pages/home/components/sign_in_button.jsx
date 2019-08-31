import React from "react";
import Bounce from "react-reveal/Bounce";

const SignInButton = () => {
  return (
    <div className="sign-in-button-wrapper">
      <Bounce delay={900}>
        <form action="/users/auth/spotify">
          <button type="submit" className="sign-in-button hvr-ripple-out">
            Sign in with Spotify
          </button>
        </form>
      </Bounce>
    </div>
  );
};

export default SignInButton;
