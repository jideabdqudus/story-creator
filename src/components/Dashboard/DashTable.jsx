import React, { Component } from "react";
import { Table, Container, Button } from "reactstrap";
import DashTableBody from "./DashTableBody";

class DashTable extends Component {
  render() {
    return (
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Story</th>
              <th>Type</th>
              <th>Average Words</th>
              <th>Cost</th>
              <th>Status</th>
            </tr>
          </thead>

          {this.props.stories.map((story) => (
            <tbody key={story.id}>
              <td>{story.id}</td>
              <td>{story.title}</td>
              <td>{story.detail}</td>
              <td>{story.type}</td>
              <td>{story.words}</td>
              <td>{story.cost}</td>
              <td>
                <Button sm color="primary"></Button>
              </td>
            </tbody>
          ))}
        </Table>
      </Container>
    );
  }
}
export default DashTable;
