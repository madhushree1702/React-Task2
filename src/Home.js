import React from 'react';
import Table from './Table';

class Home extends React.Component {
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
            <div className="Search" align="center">
                <input type="text" placeholder="Search"/>
                <button> Submit </button>
                <br /><br />
                <Table employees={this.state.employees} />
            </div>
        )
    }
}

export default Home;
    