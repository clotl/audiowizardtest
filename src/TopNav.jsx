import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "reactstrap";
import Logo from "./audiowizard.png";

const TopNav = () => {
  return (
    <div>
      <Navbar>
        <NavbarBrand>
          <img src={Logo} alt="audio wizard" />
        </NavbarBrand>
        <Nav>
          <Button color="info"> Thibaut Gressier </Button>
        </Nav>
      </Navbar>
    </div>
  );
};

export default TopNav;
