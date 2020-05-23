import React, { Component } from "react";
import { Table, Container } from "reactstrap";
import DashTableBody from "./DashTableBody";

class DashTable extends Component {
  render() {
    console.log(this.props.stories);
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
          <tbody>
          {this.props.stories.map((story)=>(
              <DashTableBody/>
          ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}
export default DashTable;
