import React, { Component } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
} from "reactstrap";

class FormCard extends Component {
  render() {
    return (
      <Container>
        <Form>
          <FormGroup row>
            <Label for="title" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                id="formTitle"
                placeholder="Story Title"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="story" sm={2}>
              Story
            </Label>
            <Col sm={10}>
              <Input type="textarea" name="story" id="formStory" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Type
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="type"
                id="formType"
                placeholder="Story Type"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Average Words
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="words"
                id="formWords"
                placeholder="Average number of words"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2}>
              Cost:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="cost"
                id="formCost"
                placeholder="Story Cost"
              />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary" block>
                Submit
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default FormCard;
