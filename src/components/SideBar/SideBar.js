import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
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
function SideBar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
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
              <a onClick={closeMobileMenu} style={{ fontSize: "14pt" }}>
                Home
              </a>
            </MenuItem>
            <MenuItem icon={<AiOutlineUser size={30} />}>
              <a onClick={closeMobileMenu} style={{ fontSize: "14pt" }}>
                About
              </a>
            </MenuItem>
            <MenuItem icon={<AiOutlineFileText size={30} />}>
              <a onClick={closeMobileMenu} style={{ fontSize: "14pt" }}>
                Resume
              </a>
            </MenuItem>
            <MenuItem icon={<AiOutlineProject size={30} />}>
              <a onClick={closeMobileMenu} style={{ fontSize: "14pt" }}>
                Portfolio
              </a>
            </MenuItem>
            <MenuItem icon={<AiOutlineMail size={30} />}>
              <a onClick={closeMobileMenu} style={{ fontSize: "14pt" }}>
                Contact
              </a>
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
