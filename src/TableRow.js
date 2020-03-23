import React from 'react';
import { RBGlyphicon } from 'react-bootstrap'; 
class TableRow extends React.Component {

    render() {
        return (
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                {/* <td><input class='myclass' type='button' value='Delete'/></td> */}
                <td><span class="glyphicon glyphicon-trash"></span></td>
                </tr>
         )
    }
    
}

export default TableRow;