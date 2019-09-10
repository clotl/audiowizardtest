import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import MainApp from "./MainApp";

import { Container, Row, Col } from "reactstrap";

const Layout = ({ child }) => {
  return (
    <Container fluid>
      <Row>
        <TopNav />
      </Row>
      <Row>
        <LeftNav />
        <MainApp />
        {/* <Col className={"pt-4 pb-4"}> {child} </Col> */}
      </Row>
    </Container>
  );
};

export default Layout;
