import React, { Component } from 'react';
import { createBook, editBook,resetError } from '../actions/book.actions';
import { connect } from 'react-redux';

class CreateBook extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            title: "",
            author: "",
            year: ""
        }
    }

    componentDidMount() {
        const props = this.props;
        console.log(props);
        if (props.location && props.location.state) {
            const book = props.location.state;
            this.setState({
                id: book.id,
                title: book.title,
                author: book.author,
                year: book.year
            })
        }
    }

    componentWillUnmount(){
        this.props.onResetError(null);
    }

    handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
    }

    onSubmit = (e) => {
        
        e.preventDefault();
        if (this.state.id) {
            const updatedBook = {
                id: this.state.id,
                title: this.state.title,
                author: this.state.author,
                year: this.state.year
            }
            this.props.onEdit(updatedBook);
        } else {
            const newBook = {
                title: this.state.title,
                author: this.state.author,
                year: this.state.year
            }
            this.props.onAdd(newBook);
        }

    }

    render() {
        return (
            <div className="row mt-5">
                <div className="container col-lg-5 jumbotron">
                    <h3>{this.state.id ? 'Edit' : 'Add'} Book</h3>
                    {
                        this.props.error && (<p className="alert alert-danger">{this.props.error}</p>)
                    }
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Title:</label>
                            <input type="text" className="form-control" value={this.state.title} onChange={(e) => this.handleInputChange(e)} name="title" placeholder="Enter Title" />
                        </div>

                        <div className="form-group">
                            <label>Author:</label>
                            <input type="text" className="form-control" value={this.state.author} onChange={(e) => this.handleInputChange(e)} name="author" placeholder="Enter Author" />
                        </div>

                        <div className="form-group">
                            <label>Year:</label>
                            <input type="text" className="form-control" value={this.state.year} onChange={(e) => this.handleInputChange(e)} name="year" placeholder="Enter Year" />
                        </div>

                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm">{this.state.id ? 'Update' : 'Add'}</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        error: state.booksData.error || null,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (data) => {
            dispatch(createBook(data))
        },
        onEdit: (data) => {
            dispatch(editBook(data))
        },
        onResetError: (data) => {
            dispatch(resetError(data))
        },
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBook);