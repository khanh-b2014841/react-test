import React from "react";

import ExChildComponent from "./childComponent_ex";

/**
 * react.Fragment
 * JSX luon tra ve mot khoi
 * state -> obj (key: value)
 */

class ExComponent extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        arrJobs:[
            {id:'job1', title:'IT', salary:'1000$'},
            {id:'job2', title:'Testers', salary:'800$'},
            {id:'job3', title:'manager', salary:'2000$'}
        ]
    }
    handleFirstName = (event) =>{
        this.setState({
            firstName: event.target.value

        })
    }

    handleLastName =(event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log("check data input>>>", this.state)
    }
    
    render() {
        console.log(">>render", this.state)
        

        // const name = "khanh"
        return(
            <>
                <div>
                    hello this is my form
                </div>
                <form>
                     <label htmlFor="fname">First name:</label><br/>
                     <input type="text" value={this.state['firstName']}
                     onChange={(event)=>{this.handleFirstName(event)}}/><br/>
                     <label htmlFor="lname">Last name:</label><br/>
                     <input type="text" value={this.state['lastName']}
                     onChange={(event)=>{this.handleLastName(event)}}/><br/><br/>
                     <input 
                     type="submit" 
                     value="submit"
                    
                     onClick={(event)=>{this.handleSubmit(event)}}/>
                </form> 


                <ExChildComponent 
                firstName = {this.state.firstName}
                lastName = {this.state.lastName}
                age = "23"
                jobs = {this.state.arrJobs}
                
                />
               
              
            </>
        )
    }
}

export default ExComponent;