import React from "react";
import { Button, Col } from "reactstrap";

import styles from "./ButtonMainApp.module.css";

const ButtonMainApp = ({ name }) => {
  return (
    <Col lg="6" md="6" className={"d-flex justify-content-center"}>
      <Button className={styles.buttonStyle}> {name} </Button>
    </Col>
  );
};

export default ButtonMainApp;
