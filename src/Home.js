import React from 'react';
import Table from './Table';

class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newEmployeeName: "",
            editedEmployee: {
                id: 0, name: ""
            },
            isEditing: false,
            addButtonText: "ADD",
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
        } else {
            return false
        }
    }

    triggerSubmit(){
        if (this.validParams()){
            var listOfEmployee = this.state.employees
            if (this.state.isEditing) {
                this.state.editedEmployee.name = this.state.newEmployeeName
                this.state.isEditing = false
                this.state.newEmployeeName = ""
                this.state.addButtonText = "ADD"
            } else {
                var newEmployee = {
                    id: listOfEmployee.length + 1,
                    name: this.state.newEmployeeName
                }
                listOfEmployee.push(newEmployee)
            }            
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

    editEmployee = (employee) => {
        this.setState({
            isEditing: true,
            editedEmployee: employee,
            newEmployeeName: employee.name,
            addButtonText: "SAVE"
        })

    }
    

    render() {
        return (
            <div align="center"><b> Add New Row </b>
            <div className="Search" align="center">
                <input type="text" placeholder="Enter Name" value={this.state.newEmployeeName} onChange={(e) => {
                  this.setState({
                      newEmployeeName: e.target.value,
                  })  
                }} />
               
                <button onClick={this.triggerSubmit.bind(this)}> {this.state.addButtonText} </button>
                <br /><br />
                <Table employees={this.state.employees} deleteEmployee={this.deleteEmployee} editEmployee={this.editEmployee} />
            </div>
            </div>
        )
    }
}

export default Home;
    