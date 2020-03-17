import React from 'react';
import TableRow from './TableRow'

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
            this.state.employees.map((employee) => {
                return (
                    <div className="table">
                        <TableRow id={employee.id} name={employee.name}></TableRow>
                    </div>
                )
            })
        )
    }
}

export default Table;