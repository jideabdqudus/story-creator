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
  state = {
    title: "",
    detail: "",
    type: "",
    words: "",
    cost: ""
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.formSubmit(
      this.state.title,
      this.state.detail,
      this.state.type,
      this.state.words,
      this.state.cost
    );
    this.setState({
      title: "",
      detail: "",
      type: "",
      words: "",
      cost: "",
    });
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { title, detail, type, words, cost } = this.state;
    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          <FormGroup row>
            <Label for="title" sm={2}>
              Title
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="title"
                value={title}
                onChange={this.inputChange}
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
              <Input
                type="textarea"
                value={detail}
                onChange={this.inputChange}
                name="detail"
                id="formDetail"
              />
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
                value={type}
                onChange={this.inputChange}
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
                value={words}
                onChange={this.inputChange}
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
                value={cost}
                onChange={this.inputChange}
                id="formCost"
                placeholder="Story Cost"
              />
            </Col>
          </FormGroup>

          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary" type="submit" block>
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
