import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const LeftNav = () => {
  return (
    <div>
      <Navbar>
        <Nav>
          <NavItem>
            {/* <NavLink href="/components/"></NavLink> */}
            Première visite
          </NavItem>
          <NavItem>
            {/* <NavLink href="/components/"></NavLink> */}
            Adaptation
          </NavItem>
          <NavItem>
            {/* <NavLink href="/components/"></NavLink> */}
            Patient en essai
          </NavItem>
          <NavItem>
            {/* <NavLink href="/components/"></NavLink> */}
            Patient appareillé
          </NavItem>
          <NavItem>
            {/* <NavLink href="/components/"></NavLink> */}
            Relance
          </NavItem>
          <NavItem>
            {/* <NavLink href="/components/"></NavLink> */}
            Statistiques
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default LeftNav;
