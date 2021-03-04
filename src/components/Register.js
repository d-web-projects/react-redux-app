import React, { Component } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

toast.configure();

class Register extends Component {

    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            city: "",
            terms: false,
            isFormInvalid: true,
            educations: [
                { id: 1, value: "Diploma", isChecked: false },
                { id: 2, value: "UG", isChecked: false },
                { id: 3, value: "PG", isChecked: false }
            ]
        }

    }

    handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
        setTimeout(() => console.log(this.state), 500);
    }

    handleCheckInput = (event) => {
        let educations = this.state.educations;
        educations.forEach((item) => {
            if (item.value == event.target.value) {
                item.isChecked = event.target.checked
            }
        });
        this.setState({ educations });
        setTimeout(() => console.log(this.state.educations), 500);
    }

    handleAllChecked = (event) => {
        let educations = this.state.educations;
        educations.forEach((item) => {
            item.isChecked = event.target.checked
        });
        this.setState({ educations });
        setTimeout(() => console.log(this.state.educations), 500);
    }

    onSubmit = (event) => {
        event.preventDefault();

        if(this.state.firstName === ""){
            toast.error('Enter firstname!',{
                position:toast.POSITION.TOP_RIGHT
            });
            return false;
        }
        if(this.state.lastName === ""){
            toast.error('Enter lastname!',{
                position:toast.POSITION.TOP_RIGHT
            });
            return false;
        }
        if(this.state.gender === ""){
            toast.error('Select gender!',{
                position:toast.POSITION.TOP_RIGHT
            });
            return false;
        }
        if(this.state.city === ""){
            toast.error('Select city!',{
                position:toast.POSITION.TOP_RIGHT
            });
            return false;
        }

        toast.success('Submitted successfully!',{
            position:toast.POSITION.TOP_RIGHT
        });
        console.log(this.state);
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="container col-lg-5 jumbotron">
                    <h3>Register</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" className="form-control" value={this.state.firstName} onChange={(e) => this.handleInputChange(e)} name="firstName" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" value={this.state.lastName} onChange={(e) => this.handleInputChange(e)} name="lastName" placeholder="Enter Last Name" />
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
                            <label>Education:</label>
                            <div className="checkbox">
                                <label><input type="checkbox" value="SelectAll" onChange={(e) => this.handleAllChecked(e)} /> Select All</label>
                            </div>
                            <div className="ml-3">
                                {
                                    this.state.educations.map((item) => {
                                        return (
                                            <div className="checkbox" key={item.id}>
                                                <label><input type="checkbox" checked={item.isChecked} value={item.value} onChange={(e) => this.handleCheckInput(e)} /> {item.value}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <select name="city" className="form-control" onChange={(e) => this.handleInputChange(e)} >
                                <option value="">Select City</option>
                                <option value="nagpur">Nagpur</option>
                                <option value="pune">Pune</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox" name="terms" value={this.state.terms} onChange={(e) => this.handleInputChange(e)} /> I agree the terms and conditions.
                            </label>
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

export default Register;