import React from "react";
import { Navbar, NavbarBrand, Nav, Col } from "reactstrap";
import { Button } from "reactstrap";
import Logo from "./assets/audiowizard.png";

import styles from "./TopNav.module.css";

const TopNav = () => {
  return (
    <Col>
      <Navbar className={"mt-3 mb-5"}>
        <NavbarBrand>
          <img className={styles.logo} src={Logo} alt="audio wizard" />
        </NavbarBrand>
        <Nav>
          <Button color="info"> Mon compte </Button>
        </Nav>
      </Navbar>
    </Col>
  );
};

export default TopNav;
