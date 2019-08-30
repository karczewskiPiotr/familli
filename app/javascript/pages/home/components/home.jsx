import React from "react";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <>
      <Fade bottom>
        <h1>Hello from React</h1>
      </Fade>
      <a href="/users/auth/spotify">Log in with Spotify</a>
    </>
  );
};

export default Home;
