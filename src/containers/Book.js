import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBooks, deleteBook } from '../actions/book.actions';

class Books extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onFetch();
    }

    onEdit = (book) => {
        this.props.history.push({
            pathname: `/edit-book/${book.id}`,
            state: book
        });
    }

    handleDelete = (book) => {
        if (window.confirm(`Are you sure to delete ${book.title}`)) {
            this.props.onDelete(book.id);
        }
    }

    render() {
        if (this.props.isLoading) {
            return (<div>
                Loading....
            </div>);
        }
        else {
            return (<div className="mt-5">
                {
                    this.props.error && (<div className="alert alert-danger">{this.props.error}</div>)
                }
                <button type="button" className="btn btn-primary btn-sm mb-2" onClick={() => this.props.history.push('/add-book')}>Add</button>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr. No.</th>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.books.length > 0 && this.props.books.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.title}</td>
                                        <td>{item.author}</td>
                                        <td>{item.year}</td>
                                        <td>
                                            <button type="button" className="btn btn-success btn-sm" onClick={() => this.onEdit(item)}>Edit</button> | <button type="button" className="btn btn-danger btn-sm" onClick={() => this.handleDelete(item)}>Delete</button>
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

}

const mapStateToProps = (state) => {
    return {
        books: state.booksData.books || [],
        error: state.booksData.error || null,
        isLoading: state.booksData.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onFetch: () => {
            dispatch(fetchBooks())
        },
        onDelete: (id) => {
            dispatch(deleteBook(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);