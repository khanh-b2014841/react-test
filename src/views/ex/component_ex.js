import React from "react";

/**
 * react.Fragment
 * JSX luon tra ve mot khoi
 * state -> obj (key: value)
 */

class ExComponent extends React.Component{

    state = {
        name: "Khanh",
        age: "23"
    
      }
    handleOnChangeName = (e) =>{
        this.setState({
            name: e.target.value
        })

    }
    render() {

        // const name = "khanh"
        return(
            <>
                <div>
                     Hello my name is {this.state['name']}
                     {/* hoac this.state.name */}
                </div>
                <input value={this.state['name']} type="text"
                onChange = {(e) => this.handleOnChangeName(e)}></input>
                <div>
                    I'm {this.state.age}
                </div>
            </>
        )
    }
}

export default ExComponent;