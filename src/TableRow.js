import React from 'react';
import {Table} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faTrash } from '@fortawesome/free-solid-svg-icons'

 
class TableRow extends React.Component {

    render() {
        return (
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                {/* <td><input class='myclass' type='button' value='Delete'/></td> */}
                <td><span><FontAwesomeIcon icon="faTrash" /></span></td>
                </tr>
         )
    }
    
}

export default TableRow;