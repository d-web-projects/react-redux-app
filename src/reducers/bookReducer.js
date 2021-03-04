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
} from '../actions/types';

const defaultState = {
    books: [],
    error: null,
    isLoading: false
}

const bookReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_BOOK_SUCCESS:
            return { ...state, books: [...state.books, action.payload] };
        case ADD_BOOK_ERROR:
            return { ...state, error: action.payload };
        case EDIT_BOOK_SUCCESS:
            const updateIndex = state.books.findIndex(book => book.id === action.payload.id);
            state.books.splice(updateIndex, 1, action.payload);
            return { ...state, books: [...state.books] };
        case EDIT_BOOK_ERROR:
            return { ...state, error: action.payload };
        case DELETE_BOOK_SUCCESS:
            const deleteIndex = state.books.findIndex(book => book.id === action.payload.id);
            state.books.splice(deleteIndex, 1);
            return { ...state, books: [...state.books] };
        case DELETE_BOOK_ERROR:
            return { ...state, error: action.payload };
        case FETCH_BOOK_SUCCESS:
            return { ...state, books: action.payload };
        case FETCH_BOOK_LOADING:
            return { ...state, isLoading: action.payload };
        case FETCH_BOOK_ERROR:
            return { ...state, error: action.payload };
        case RESET_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default bookReducer;