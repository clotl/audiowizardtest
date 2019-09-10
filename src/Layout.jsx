import React from "react";
import TopNav from "./TopNav";
import LeftNav from "./LeftNav";
import { Container, Row, Col } from "reactstrap";

const Layout = ({ child }) => {
  return (
    <Container fluid>
      <Row>
        <TopNav />
      </Row>
      <>
        <Row>
          <Col sm="2" lg="2" className={"d-flex align-items-start"}>
            <LeftNav />
          </Col>
          <Col> {child} </Col>
        </Row>
      </>
    </Container>
  );
};

export default Layout;
