import React from "react";
import { Navbar, Nav, NavItem, NavLink, Col } from "reactstrap";

import styles from "./LeftNav.module.css";

const LeftNav = () => {
  return (
    <div className={"d-flex align-items-start"}>
      <Navbar>
        <NavLink className={styles.itemMenuOrange} href="/components/">
          Première visite
        </NavLink>
        <NavLink className={styles.itemMenuBlue} href="/components/">
          Adaptation
        </NavLink>
        <NavLink className={styles.itemMenuBlue} href="/components/">
          Patients en essai
        </NavLink>
        <NavLink className={styles.itemMenuBlue} href="/components/">
          Patients appareillés
        </NavLink>
        <NavLink className={styles.itemMenuBlue} href="/components/">
          Relance
        </NavLink>
        <NavLink className={styles.itemMenuBlue} href="/components/">
          Statistiques
        </NavLink>
      </Navbar>
    </div>
  );
};

export default LeftNav;
