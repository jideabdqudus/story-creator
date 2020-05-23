import React from 'react'
import {Table, Container, Button} from "reactstrap"

const DashTable = () => {
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
          <tr>
            <th scope="row">1</th>
            <td>Massacre in Munich</td>
            <td>Lore Ipsum Dolor sit Amet</td>
            <td>Sport Journo</td>
            <td>3000</td>
            <td>$2</td>
            <td>Read</td>
            <td><Button sm color="primary"></Button></td>
          </tr>
        </tbody>
      </Table>
        </Container>
    )
}

export default DashTable
