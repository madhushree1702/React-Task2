import React from 'react';

class TableRow extends React.Component {

    render() {
        return (
            <div className="tableRow">
                <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td><input class='myclass' type='button' value='Delete'/></td>
                </tr>
            </div>
         )
    }
    
}

export default TableRow;