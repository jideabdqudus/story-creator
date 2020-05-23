import React from "react";
import { Container, Row, Col } from "reactstrap";

const HeaderCard = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="12" md={{ size: 6, offset: 5 }}>
            <h1>User Story</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderCard;
