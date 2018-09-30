import React, { Component } from 'react';

export default class AddNewEmployee extends Component
{
    constructor(){
        super()
        this.state={
            name:"",
            age:0
        }
    }
    render(){
        return(
            <div className="login">
            <table>
            <tr>
            <td>Employee Name <input type="text" onChange={e=>this.updateState(e)} name="name" value={this.state.name}></input></td>
            </tr>
            <tr>
            <td>Employee Age <input type="number" onChange={e=>this.updateState(e)} name="age" value={this.state.age}></input></td>
            </tr>
            <tr>
            <td>
            <button onClick={()=>this.submitData()}>Submit</button>
            </td>
            </tr>
            </table>
            </div>
        )
    }
    updateState(event){
        this.setState({[event.target.name]:event.target.value})
        
    }
}