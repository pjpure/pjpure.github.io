import React from "react";
import "./Home.css";
import profileData from "../../data/profile";

function Home() {
  return (
    <div id="home" className="home-con">
      <div className="home-text-head" id="home-head">
        <p>{profileData.name}</p>
      </div>
      <div className="home-text-con">
        <p>I'm a {profileData.position}</p>
      </div>
    </div>
  );
}

export default Home;
