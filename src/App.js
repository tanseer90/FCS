import React, { Component } from 'react';
import users from './users.json';
import { Table } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Sign up Order</Table.HeaderCell>
          <Table.HeaderCell>Full Name</Table.HeaderCell>
          <Table.HeaderCell>Invite Code</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
     
      {users.length > 0 && users.filter(data => data.code != '').map(items => (
          <Table.Body>
            <Table.Row>
            <Table.Cell>{items.order}</Table.Cell>
            <Table.Cell>{items.name}</Table.Cell>
            <Table.Cell>{items.code}</Table.Cell>
          </Table.Row>
        </Table.Body>
      ))}
      {users.length > 0 && users.filter(data => data.code == '').map((items, index) => (
        <Table.Body>
          <Table.Row>
          <Table.Cell>{items.order}</Table.Cell>
          <Table.Cell>{items.name}</Table.Cell>
          <Table.Cell>{`${index + 1} Days wating`}</Table.Cell>
        </Table.Row>
      </Table.Body>
    ))
     
    }
    </Table>
    );
  }
}

export default App;