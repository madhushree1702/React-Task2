import React from 'react';
import {Table} from 'react-bootstrap'
import trash from '../src/assets/images/valorant/trash.png'
 
class TableRow extends React.Component {

    render() {
        return (
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td><img src={trash} /></td>
                {/* <td><input class='myclass' type='button' value='Delete'/></td> */} 
                {/* <td><span class="glyphicon glyphicon-search"></span></td> */}
                </tr>
         )
    }
    
}

export default TableRow;