import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import { Button } from "react-bootstrap";
import Profile from "./Profile";
import "./SideBar.scss";
import { Link } from "react-scroll";
function SideBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const onClickMenu = () => setClick(false);

  return (
    <div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? <FiX /> : <FiMenu />}
      </div>
      <div className={click ? "menu active" : "menu"}>
        <ProSidebar>
          <Profile />
          <Menu iconShape="square">
            <MenuItem icon={<AiOutlineHome size={30} />}>
              <Link
                to="home"
                spy={true}
                onClick={onClickMenu}
                style={{ fontSize: "14pt" }}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem icon={<AiOutlineUser size={30} />}>
              <Link
                to="about"
                spy={true}
                onClick={onClickMenu}
                style={{ fontSize: "14pt" }}
              >
                About
              </Link>
            </MenuItem>
            <MenuItem icon={<AiOutlineFileText size={30} />}>
              <Link
                to="resume"
                spy={true}
                onClick={onClickMenu}
                style={{ fontSize: "14pt" }}
              >
                Resume
              </Link>
            </MenuItem>
            <MenuItem icon={<AiOutlineProject size={30} />}>
              <Link
                to="portfolio"
                spy={true}
                onClick={onClickMenu}
                style={{ fontSize: "14pt" }}
              >
                Portfolio
              </Link>
            </MenuItem>
            <MenuItem icon={<AiOutlineMail size={30} />}>
              <Link
                to="contact"
                spy={true}
                onClick={onClickMenu}
                style={{ fontSize: "14pt" }}
              >
                Contact
              </Link>
            </MenuItem>
          </Menu>

          <div className="footer" style={{ textAlign: "center" }}>
            <Button
              style={{ textAlign: "center", marginTop: "10px" }}
              href="https://github.com/pjpure"
              target="_blank"
              className="gitBtn"
            >
              <AiOutlineGithub size={25} style={{ marginTop: "-4px" }} /> Github
            </Button>
          </div>
        </ProSidebar>
      </div>
    </div>
  );
}

export default SideBar;
