import React, { Component, Fragment } from 'react';

class FavColor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            color: 'red'
        }
    };

    // static getDerivedStateFromProps(props,state){
    //     return {color:props.color}
    // }

    // shouldComponentUpdate(){
    //     return true;
    // }

    getSnapshotBeforeUpdate(prevProps,prevState){
        document.getElementById('div1').innerHTML = "Before update, color was "+prevState.color;
    }

    componentDidUpdate(){
        document.getElementById('div2').innerHTML = "After update, color is "+this.state.color;
    }

    componentWillUnmount(){
        window.alert("bye.");
    }

    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({color:"pink"})
    //     },4000)
    // }

    changeColor = () => {
        this.setState({ color: "blue" });
    }

    render() {
        return (<Fragment>
            <h2>My favourite color is {this.state.color}</h2>
            <button type="button" onClick={this.changeColor}>Change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
        </Fragment>)
    }

}

export default FavColor;