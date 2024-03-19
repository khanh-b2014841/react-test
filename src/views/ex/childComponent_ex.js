import React from "react";


class ExChildComponent extends React.Component {

    state = {
        showJobs: false
    }

    handleStatus = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {
        console.log(">>render", this.props)

        // const name = this.props.name
        // const age = this.props.age


        const { firstName, lastName, age, jobs } = this.props;
        const { showJobs } = this.state;

        // const name = "khanh"
        return (
            <>
                <div>first name: {firstName} - lastName: {lastName} - age: {age}</div>
                {showJobs === false ?
                    <div>
                        <button onClick={() => { this.handleStatus() }}>Show</button>
                    </div>
                    : showJobs === true &&
                    <>
                        <div className="job-list">
                            {
                                jobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })

                            }

                        </div>
                        <div>
                            <button onClick={() => { this.handleStatus() }}>Hide</button>
                        </div>

                    </>

                }


            </>
        )
    }
}



// const ExChildComponent = (props) =>{
//     console.log(">>>check child props", props)
//     const { jobs} = props;
//         return(
//             <>

//             <div className="job-list">
//                 {

//                     jobs.map((item, index)=>{
//                         if(item.salary >=1000){
//                             return(
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary}$
//                                 </div>
//                             )

//                         }

//                     })

//                 }

//             </div>

//             </>
//         )
// }

export default ExChildComponent;