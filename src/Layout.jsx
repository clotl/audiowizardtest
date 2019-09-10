import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import MainApp from "./MainApp";
import { Row, Col } from "reactstrap";

import styles from "./Layout.module.css";

const Layout = ({ child }) => {
  return (
    <div>
      <Row>
        <TopNav />
      </Row>
      <Row>
        <Col sm="2" lg="2">
          <LeftNav />
        </Col>
        <Col>
          {/* <MainApp /> */}
          {child}
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
