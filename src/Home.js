import React from 'react';
import Table from './Table';
import { getElementError } from '@testing-library/dom';


class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newEmployeeName: "",
            Validmessage: "Enter a valid Name",
            employees : [
                {id: 1, name: 'Madhushree'},
                {id: 2, name: 'Priyanka'},
                {id: 3, name: 'Vaibhavi'},
                {id: 4, name: 'Pavithra'},
                {id: 5, name: 'Gomathi'}
            ]
        }
    }

    validParams(){
        if(this.state.newEmployeeName != undefined && this.state.newEmployeeName != "") {
            return true
            this.setState({
                Validmessage: false
            })
        } else {
            this.setState({
                Validmessage: true
            })
            return false
        }
    }

    triggerSubmit(){
        if (this.validParams()){
            var listOfEmployee = this.state.employees
            var newEmployee = {
                id: listOfEmployee.length + 1,
                name: this.state.newEmployeeName
            }
            listOfEmployee.push(newEmployee)
            this.setState({
                employees: listOfEmployee
            })
        }
    }

    deleteEmployee = (employee) => {
        var listOfEmployees = this.state.employees
        var index = listOfEmployees.indexOf(employee);
        listOfEmployees.splice(index, 1)
        this.setState({
            employees: listOfEmployees
        })
    }

    render() {
        return (
            <div align="center"><b> Add New Row </b>
            <div className="Search" align="center">
                <input type="text" placeholder="Enter Name" onChange={(e) => {
                  this.setState({
                      newEmployeeName: e.target.value
                  })  
                }}/>
               
                <button onClick={this.triggerSubmit.bind(this)}> ADD </button>
                <br /><br />
                <Table employees={this.state.employees} deleteEmployee={this.deleteEmployee} />
            </div>
            </div>
        )
    }
}

export default Home;
    