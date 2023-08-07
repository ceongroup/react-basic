import React from 'react';

class ChildComponent extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        address: '',
        arrJobs: ''
    }
    state = {
        showJobs: false
    }

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()

    }
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }


    render() {


        let { showJobs } = this.state;
        let { arrJobs } = this.props;
        let a = '';
        let check = showJobs === true ? "showJobs = true" : "showJobs = false";
        console.log("check condition >>>", check);
        return (
            // Fragment 
            <>
                {showJobs === false ?
                    <div> <button
                        onClick={() => this.handleShowHide()}
                    >SHOW</button>  </div>
                    :
                    <>
                        <div className='jobList'>
                            {
                                a = arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                        </div>
                                    )
                                })

                            }
                            {/* {console.log("check array map:", a)} */}
                        </div >

                        <div> <button onClick={() => this.handleShowHide()}>HIDE</button></div>
                    </>
                }
            </>
        )
    }
}


// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     console.log("check child props: ", props)
//     return (

//         < div className='joblist'>
//             {
//                 arrJobs.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                     }
//                 })
//             }
//         </div >
//     )
// }

export default ChildComponent;
