import React from "react";
import { Navbar, NavLink, Col } from "reactstrap";

import styles from "./LeftNav.module.css";

const LeftNav = () => {
  return (
    <>
      <Navbar>
        <NavLink className={`${styles.itemMenuOrange} pt-4 pb-4 d-flex justify-content-center`} href="/firstvisit/">
          Première visite
        </NavLink>
        <NavLink className={`${styles.itemMenuBlue} pt-4 pb-4 d-flex justify-content-center`} href="/adaptation/">
          Adaptation
        </NavLink>
        <NavLink className={`${styles.itemMenuBlue} pt-4 pb-4 d-flex justify-content-center`} href="/trypatient/">
          Patients en essai
        </NavLink>
        <NavLink className={`${styles.itemMenuBlue} pt-4 pb-4 d-flex justify-content-center`} href="/components/">
          Patients appareillés
        </NavLink>
        <NavLink className={`${styles.itemMenuBlue} pt-4 pb-4 d-flex justify-content-center`} href="/components/">
          Relance
        </NavLink>
        <NavLink className={`${styles.itemMenuBlue} pt-4 pb-4 d-flex justify-content-center`} href="/stats/">
          Statistiques
        </NavLink>
      </Navbar>
    </>
  );
};

export default LeftNav;
