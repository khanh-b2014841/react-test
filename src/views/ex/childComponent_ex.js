import React from "react";


class ExChildComponent extends React.Component{

    
    render() {
        console.log(">>render", this.props)
        // const name = this.props.name
        // const age = this.props.age
        
        const {firstName,lastName, age, jobs} = this.props;

        // const name = "khanh"
        return(
            <>
            <div>first name: {firstName} - lastName: {lastName} - age: {age}</div>
            <div className="job-list">
                {
                    jobs.map((item, index)=>{
                        return(
                            <div key={item.id}>
                                {item.title} - {item.salary}
                            </div>
                        )
                    })

                }
            
            </div>
                
            </>
        )
    }
}

export default ExChildComponent;