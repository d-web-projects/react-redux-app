import axios from 'axios';
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class AddEmp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            post: ""
        }
    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (event) => {
        event.preventDefault();
        const employee = {
            name: this.state.name,
            gender: this.state.gender,
            post: this.state.post
        }
        const url = `http://localhost:5555/employees/`;
        axios.post(url, employee)
            .then(() => {
                toast.success('Submitted successfully!', {
                    position: toast.POSITION.TOP_RIGHT
                });
                this.props.history.push('/employees');
            })
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="container col-lg-5 jumbotron">
                    <h3>Add Employee</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={(e) => this.handleInputChange(e)} name="name" placeholder="Enter Name" />
                        </div>

                        <div className="form-group">
                            <label>Gender:</label>
                            <div>
                                <label className="radio">
                                    <input type="radio" name="gender" value="male" onChange={(e) => this.handleInputChange(e)} /> Male
                                </label>&nbsp;&nbsp;
                                <label className="radio">
                                    <input type="radio" name="gender" value="female" onChange={(e) => this.handleInputChange(e)} /> Female
                                </label>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Post:</label>
                            <select name="post" className="form-control" onChange={(e) => this.handleInputChange(e)} >
                                <option value="">Select Post</option>
                                <option value="developer">developer</option>
                                <option value="team lead">team lead</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddEmp;