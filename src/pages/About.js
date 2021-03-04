import React, { Component } from 'react';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    render() {
        return (
        <div>
            <h1>About component</h1>
        </div>)
    }

 

}

export default About;