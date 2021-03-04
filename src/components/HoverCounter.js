import React, { Component } from 'react';

class HoverCounter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
        this.incrementHandler = this.incrementHandler.bind(this);
    }

    incrementHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 2
            }
        })
    }

    render() {
        const {title,description} = this.props; // destructing of object
        const {count} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                {/* <button type="button" className="btn btn-primary" onClick={this.incrementHandler}>Clicked {count} times</button> */}
                <h1 onMouseOver={this.incrementHandler}>Clicked {count} times</h1>
            </div>
        )
    }

}

export default HoverCounter;