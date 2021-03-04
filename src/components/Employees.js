import React, { Component } from 'react';
import axios from 'axios';
class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount() {
        this.fetchEmployees();
    }

    fetchEmployees = () => {
        const url = `http://localhost:5555/employees/`;
        axios.get(url)
            .then((res) => {
                console.log(res.data)
                this.setState({ employees: res.data });
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteHandler = (id) => {
        const emp = this.state.employees.find((v) => v.id === id);
        if (window.confirm(`Are you sure you want to delete ${emp.name}`)) {
            const url = `http://localhost:5555/employees/${id}`;
            axios.delete(url)
                .then(() => {
                    window.alert("Deleted successfully!");
                    this.fetchEmployees();
                })
                .catch((err) => {
                    console.log(err)
                });

        }

    }



    render() {
        return (<div>
            <div className="d-flex justify-content-between align-items-center">
            <h3>Employees List</h3>
            <button type="button" className="btn btn-primary btn-sm" onClick={() => this.props.history.push('/add-emp')} >Add</button>
            </div>
            
            <table className="table">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Post</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.length > 0 && this.state.employees.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.post}</td>
                                    <td>
                                        <button type="button" className="btn btn-success btn-sm" onClick={() => this.props.history.push(`/edit-emp/${item.id}`)}>Edit</button> | <button type="button" className="btn btn-danger btn-sm" onClick={() => this.deleteHandler(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>)
    }

}

export default Employees;