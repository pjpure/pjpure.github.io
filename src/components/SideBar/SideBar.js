import React from "react";
import { ProSidebar, Menu, MenuItem, SidebarFooter } from "react-pro-sidebar";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileText,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { Button } from "react-bootstrap";
import Profile from "./Profile";
import "./SideBar.scss";
function SideBar() {
  return (
    <div className="setSideBar">
      <ProSidebar>
        <Profile />
        <Menu iconShape="square">
          <MenuItem icon={<AiOutlineHome size={30} />}>
            <div style={{ fontSize: "14pt" }}>Home</div>
          </MenuItem>
          <MenuItem icon={<AiOutlineUser size={30} />}>
            <div style={{ fontSize: "14pt" }}>About</div>
          </MenuItem>
          <MenuItem icon={<AiOutlineFileText size={30} />}>
            <div style={{ fontSize: "14pt" }}>Resume</div>
          </MenuItem>
          <MenuItem icon={<AiOutlineProject size={30} />}>
            <div style={{ fontSize: "14pt" }}>Portfolio</div>
          </MenuItem>
          <MenuItem icon={<AiOutlineMail size={30} />}>
            <div style={{ fontSize: "14pt" }}>Contact</div>
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
  );
}

export default SideBar;
