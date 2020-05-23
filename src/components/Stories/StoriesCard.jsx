import React from "react";
import { Container, Jumbotron, Row, Col } from "reactstrap";

const StoriesCard = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-4">Massacre in Munich</h1>
        <p className="lead">
          Lorem Ipsum dolor sit amet, This is a simple hero unit, a simple
          Jumbotron-style component for calling extra attention to featured
          content or information....
        </p>
        <hr className="my-2" />
        <Row>
          <Col sm="2"> Type: Sport Journo</Col>
          <Col sm="2">Words: 3000</Col>
          <Col sm="2">Price: $2</Col>
        </Row>
      </Jumbotron>
      {this.props.story}
    </Container>
  );
};

export default StoriesCard;
