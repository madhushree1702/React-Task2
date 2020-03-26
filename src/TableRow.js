import React from 'react';
import {Table} from 'react-bootstrap'
import trash from '../src/assets/images/valorant/trash.png'
import edit from '../src/assets/images/valorant/edit.png'

class TableRow extends React.Component {

    render() {
        var employee = this.props.employee;
        return (
                <tr>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>
                    <img onClick={this.props.deleteEmployee} src={trash}/>
                    <img onClick={this.props.editEmployee} src={edit}/>
                </td>
                {/* <img onClick={this.props.editEmployee} src={edit}/></td> */} 
                {/* <img onClick={() => { this.onClick(this.props.) }} src={trash} /> */}
                {/* <td><input class='myclass' type='button' value='Delete'/></td> */} 
                </tr>
                // 
         )
    }
        
}

export default TableRow;