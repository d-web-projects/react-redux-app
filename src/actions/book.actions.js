import axios from 'axios';
import { history } from '../index';
import {
    ADD_BOOK_ERROR,
    ADD_BOOK_SUCCESS,
    ADD_BOOK_LOADING,
    EDIT_BOOK_ERROR,
    EDIT_BOOK_SUCCESS,
    EDIT_BOOK_LOADING,
    DELETE_BOOK_ERROR,
    DELETE_BOOK_LOADING,
    DELETE_BOOK_SUCCESS,
    FETCH_BOOK_ERROR,
    FETCH_BOOK_LOADING,
    FETCH_BOOK_SUCCESS,
    RESET_ERROR
} from './types';

const url = "http://localhost:5555/books";

// RESET ERROR
export const resetError = (data) => {
    return {
        type: RESET_ERROR,
        payload: data
    };
}

// CREATE

export const createBookSuccess = (data) => {
    return {
        type: ADD_BOOK_SUCCESS,
        payload: data
    };
}

export const createBookError = (data) => {
    return {
        type: ADD_BOOK_ERROR,
        payload: data
    };
}

export const createBook = (book) => {
    const data = {
        title: book.title,
        author: book.author,
        year: book.year
    }

    return (dispatch) => {
        return axios.post(url, data)
            .then(res => {
                dispatch(createBookSuccess(res.data));
                history.push('/books');
            })
            .catch((err) => {
                const errMsg = "Add book failed";
                dispatch(createBookError(errMsg));
            })
    }

}

// DELETE

export const deleteBookSuccess = (id) => {
    return {
        type: DELETE_BOOK_SUCCESS,
        payload: id
    }
}

export const deleteBookError = (data) => {
    return {
        type: DELETE_BOOK_ERROR,
        payload: data
    }
}

export const deleteBook = (id) => {
    return (dispatch) => {
        axios.delete(`${url}/${id}`)
            .then(() => {
                dispatch(deleteBookSuccess(id));
            })
            .catch(err => {
                const errMsg = "Delete book failed";
                dispatch(deleteBookError(errMsg));
            })
    }
}

// EDIT

export const editBookSuccess = (data) => {
    return {
        type: EDIT_BOOK_SUCCESS,
        payload: data
    };
}

export const editBookError = (data) => {
    return {
        type: EDIT_BOOK_ERROR,
        payload: data
    };
}

export const editBook = (book) => {
    const data = {
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year
    }
    return (dispatch) => {
        return axios.put(`${url}/${book.id}`, data)
            .then(res => {
                // console.log(res.data);
                dispatch(editBookSuccess(res.data));
                history.push('/books');
            })
            .catch((err) => {
                // console.log(err);
                const errMsg = "Update book failed";
                dispatch(editBookError(errMsg));
            });
    }
}

// FETCH
export const fetchBooksLoading = (data) => {
    return {
        type: FETCH_BOOK_LOADING,
        payload: data
    };
}

export const fetchBooksSuccess = (data) => {
    return {
        type: FETCH_BOOK_SUCCESS,
        payload: data
    };
}

export const fetchBooksError = (data) => {
    return {
        type: FETCH_BOOK_ERROR,
        payload: data
    };
}

export const fetchBooks = () => {
    let isLoading = true;
    return (dispatch) => {
        dispatch(fetchBooksLoading(isLoading));
        axios.get(url)
            .then(response => {
                dispatch(fetchBooksSuccess(response.data));
                isLoading = false;
                dispatch(fetchBooksLoading(isLoading));
            })
            .catch(error => {
                const errMsg = "Fetch books failed";
                dispatch(fetchBooksError(errMsg));

                isLoading = false;
                dispatch(fetchBooksLoading(isLoading));
            });
    };
}
