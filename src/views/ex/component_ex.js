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

    handleClickButton = () => {
        console.log("hit the button")
        alert ("why click me ?")
    }
    render() {

        // const name = "khanh"
        return(
            <>
                <div className="first">
                     Hello my name is {this.state['name']}
                     {/* hoac this.state.name */}
                </div>
                <input value={this.state['name']} type="text"
                onChange = {(e) => this.handleOnChangeName(e)}></input>
                <div className="second">
                    I'm {this.state.age}
                </div>
                <div className="third">
                    <button onClick={() => {this.handleClickButton()}}>click me</button>

                </div>
            </>
        )
    }
}

export default ExComponent;