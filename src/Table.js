import React from 'react';
import TableRow from './TableRow';
import './Design.css';

class Table extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      employees : [
        {id: 1, name: 'Madhushree'},
        {id: 2, name: 'Priyanka'},
        {id: 3, name: 'Vaibhavi'},
        {id: 4, name: 'Pavithra'},
        {id: 5, name: 'Gomathi'}
      ]
    }
  }
      
  render() {
    return (
      <table align="center">
        <thead>
          {this.renderTableHeader()}
        </thead>
        <tbody>
          {this.renderTableData()}
        </tbody>
      </table>
    )
  }

  renderTableHeader(){
    return (
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>ACTION</th>
      </tr>
    )
  }

  renderTableData() {
    return (
      this.state.employees.map((employee) => {
        return (
          <TableRow id={employee.id} name={employee.name}></TableRow>       
        )
      })
    )
  }
}

export default Table;