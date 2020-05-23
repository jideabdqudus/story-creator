import React, { Component } from "react";
import { Jumbotron, Row, Col } from "reactstrap";

export class StoryCard extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-4">{this.props.story.title}</h1>
          <p className="lead">{this.props.story.detail}</p>
          <hr className="my-2" />
          <Row>
            <Col sm="2"> Type: {this.props.story.type}</Col>
            <Col sm="2">Words: {this.props.story.words}</Col>
            <Col sm="2">Cost: {`$${this.props.story.cost}`}</Col>
          </Row>
        </Jumbotron>
      </div>
    );
  }
}

export default StoryCard;
