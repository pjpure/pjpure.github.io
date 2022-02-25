import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Profile from "./Profile";
import "./SideBar.css";
import { Link } from "react-scroll";
import profileData from "../../data/profile";
function SideBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const onClickMenu = () => {
    setClick(false);
  };

  return (
    <div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <FiX
            style={{
              textAlign: "center",
              alignItems: "center",
              height: "100%",
            }}
          />
        ) : (
          <FiMenu
            style={{
              textAlign: "center",
              alignItems: "center",
              height: "100%",
            }}
          />
        )}
      </div>
      <div className={click ? "menu active" : "menu"}>
        <div className="sidebar-bg">
          <Profile />
          <Link
            className="menu-item"
            activeClass="active"
            to="home"
            spy={true}
            onClick={onClickMenu}
          >
            <div className="menu-item-btn">
              <div className="icon-menu">
                <AiOutlineHome size={23} />
              </div>
              <div className="text-menu">Home</div>
            </div>
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="about"
            spy={true}
            onClick={onClickMenu}
          >
            <div className="menu-item-btn">
              <div className="icon-menu" xs="2">
                <AiOutlineUser size={23} />
              </div>
              <div className="text-menu" xs="9">
                About
              </div>
            </div>
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="portfolio"
            spy={true}
            onClick={onClickMenu}
          >
            <div className="menu-item-btn">
              <div className="icon-menu" xs="2">
                <AiOutlineProject size={23} />
              </div>
              <div className="text-menu" xs="9">
                Portfolio
              </div>
            </div>
          </Link>
          <Link
            className="menu-item"
            activeClass="active"
            to="contact"
            spy={true}
            onClick={onClickMenu}
          >
            <div className="menu-item-btn">
              <div className="icon-menu" xs="2">
                <AiOutlineMail size={23} />
              </div>
              <div className="text-menu" xs="9">
                Contact
              </div>
            </div>
          </Link>
          <div className="footer" style={{ textAlign: "center" }}>
            <Button
              style={{ textAlign: "center", marginTop: "10px" }}
              href={profileData.github}
              target="_blank"
              className="gitBtn"
            >
              <AiOutlineGithub size={25} style={{ marginTop: "-4px" }} /> Github
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
