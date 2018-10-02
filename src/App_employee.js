import React, { Component } from 'react';
import AddNewEmployee from "./addNewEmployee";

export default class AppEmployee extends React.Component{
    constructor(){
        super()
        this.state={
            employees:[]
        }
    }

    async componentDidMount(){
        try{
            await this.callShow()
        }
        catch(e){
            throw e
        }
    }

    render(){
        return(
            <div>
            <AddNewEmployee callShow={()=>this.callShow()}/>
            <ShowEmployees employees={this.state.employees}/>
            </div>
        )
    }

    async callShow(){
        try{
            let employees=await fetch('http://localhost:8080/employee_async')
            employees=await employees.json()
            this.setState({employees})       //this.setState({employees:employees})
        }
        catch(e){
            throw e
        }
    }
}

const ShowEmployees=props=>{
    return(
        <div>
            {
                props.employees.map(employee=>{return(<div>{employee.name}{employee.age}</div>)})
            }
        </div>
    )
}