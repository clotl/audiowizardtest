import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import { Row, Col } from "reactstrap";

const Layout = ({ child }) => {
  return (
    <div>
      <Row>
        <Col>
          <TopNav />
        </Col>
      </Row>
      <Row>
        <Col>
          <LeftNav />
        </Col>
        <Col>
          <section>{child}</section>
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
