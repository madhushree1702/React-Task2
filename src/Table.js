import React from 'react';
import TableRow from './TableRow';
import './Design.css';

class Table extends React.Component {

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
    var employees = this.props.employees;
    return (
      employees.map((employee) => {
        return (
          <TableRow employee={employee} deleteEmployee={() => this.props.deleteEmployee(employee)} 
          editEmployee={() => this.props.editEmployee(employee)} /> 
        )
      })
    )
  }
}

export default Table;