import React from "react";
import SideBar from "../components/SideBar/SideBar";
import Contents from "../components/Contents/Contents";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-page-bg">
      <SideBar />
      <div className="content">
        <Contents />
      </div>
    </div>
  );
}

export default HomePage;
