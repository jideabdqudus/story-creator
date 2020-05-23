import React, { Component } from "react";
import {  Button } from "reactstrap";

export class DashTableBody extends Component {
  render() {
    return (
      <div>
      
          <tr>
            <th scope="row">1</th>
            <td>Massacre in Munich</td>
            <td>Lore Ipsum Dolor sit Amet</td>
            <td>Sport Journo</td>
            <td>3000</td>
            <td>$2</td>
            <td>Read</td>
            <td>
              <Button sm color="primary"></Button>
            </td>
          </tr>

      </div>
    );
  }
}

export default DashTableBody;
