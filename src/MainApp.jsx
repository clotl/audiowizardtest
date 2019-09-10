import React from "react";

import { Row, Col } from "reactstrap";

import Layout from "./Layout";
import ButtonMainApp from "./Component/ButtonMainApp";

let MainApp = => {
  return (
    <Layout>
      <Row>
        <Col className={"d-flex justify-content-center"}>
          <h2> Comment va Madame Lucette Michu, née le 25/01/1945 </h2>
        </Col>
      </Row>
      <Row>
        <ButtonMainApp name="Origine" />
        <ButtonMainApp name="Médical" />
      </Row>
      <Row>
        <ButtonMainApp name="Gênes" />
        <ButtonMainApp name="Informations" />
      </Row>
    </Layout>
  );
};

export default MainApp;
