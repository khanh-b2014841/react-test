import React from "react";


class ExChildComponent extends React.Component{

    
    render() {
        console.log(">>render", this.state)
        

        // const name = "khanh"
        return(
            <>
            <div>child component {this.props.name}</div>
                
            </>
        )
    }
}

export default ExChildComponent;