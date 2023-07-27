import React from 'react';

class MyComponent extends React.Component {

    state = {
        name: "Leo",
        channel: "Nhac Khong Loi"
    }

    handleClickButton = () => {
        alert('Click Me')
    }
    handleOnChangeName = (event) => {
        // console.log(event.target.value, event.target, event)
        this.setState(
            {
                name: event.target.value
            }
        )
    }


    render() {
        let name = "Leo Nguyen";
        // console.log(">>>> call render: ", this.state)

        return (
            // Fragment 
            <>
                <div className='firstdiv'>
                    <input value={this.state.name} type="text" onChange={(event) => this.handleOnChangeName(event)} />

                    My Name is {this.state.name}

                </div>
                < div className='wrapper' >
                    Hello My Component from {this.state.name}
                </div >
                <div className='seconddiv'>
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }

}

export default MyComponent;
