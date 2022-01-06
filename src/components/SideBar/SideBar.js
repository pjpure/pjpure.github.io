import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";
import { Button, Row, Col } from "react-bootstrap";
import Profile from "./Profile";
import "./SideBar.scss";
import { Link } from "react-scroll";
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
        <ProSidebar>
          <Profile />
          <Menu iconShape="square">
            <MenuItem>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                onClick={onClickMenu}
              >
                <Row>
                  <Col className="icon-menu" xs="2">
                    <AiOutlineHome size={27} />
                  </Col>
                  <Col className="text-menu" xs="9">
                    Home
                  </Col>
                </Row>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                onClick={onClickMenu}
              >
                <Row>
                  <Col className="icon-menu" xs="2">
                    <AiOutlineUser size={27} />
                  </Col>
                  <Col className="text-menu" xs="9">
                    About
                  </Col>
                </Row>
              </Link>
            </MenuItem>

            <MenuItem>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                onClick={onClickMenu}
              >
                <Row>
                  <Col className="icon-menu" xs="2">
                    <AiOutlineProject size={27} />
                  </Col>
                  <Col className="text-menu" xs="9">
                    Portfolio
                  </Col>
                </Row>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                onClick={onClickMenu}
              >
                <Row>
                  <Col className="icon-menu" xs="2">
                    <AiOutlineMail size={27} />
                  </Col>
                  <Col className="text-menu" xs="9">
                    Contact
                  </Col>
                </Row>
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
