import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";

import { Container, Row, Col } from "reactstrap";

const Layout = ({ children }) => {
  return (
    <Container fluid>
      <Row>
        <TopNav />
      </Row>
      <Row>
        <LeftNav />
        <Col className={"pt-4 pb-4"}> {children} </Col>
      </Row>
    </Container>
  );
};

export default Layout;
