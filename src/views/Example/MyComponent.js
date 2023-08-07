import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';


class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: '123ABC-1', title: 'Developer', salary: '500' },
            { id: '123ABC-2', title: 'QC', salary: '400' },
            { id: '123ABC-3', title: 'PM', salary: '700' }
        ]
    }


    addNewJob = (job) => {
        console.log('check job from parent', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    render() {
        return (
            // Fragment 
            <>
                <div>
                    <AddComponent
                        addNewJob={this.addNewJob}
                    />

                </div >
                <ChildComponent
                    arrJobs={this.state.arrJobs}
                />


            </>
        )
    }

}

export default MyComponent;
