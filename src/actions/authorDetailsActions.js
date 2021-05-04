import {GET_FILTERED_BOOKS,GET_FILTERED_BOOKS_SEARCH,ADD_NEW_BOOK} from '../dispatchRefs';

export const getFilteredBooks = (authorID) =>(dispatch,getState) =>{
    const allBooks = getState().author.books;
    const filteredBooksTemp = allBooks.filter(item=>{
        return item.author_id === authorID
    })
    dispatch({type : GET_FILTERED_BOOKS, payload:{filteredBooks : filteredBooksTemp}})
}

export const applyFilterOnBooks = (bookName, author_id) => (dispatch,getState) =>{
    const allBooks = getState().author.books;
    const filteredBooksTemp = allBooks.filter(item=>{
        return item.name.toLowerCase().indexOf(bookName.toLowerCase()) >= 0 && item.author_id == author_id
    })    
    dispatch({type : GET_FILTERED_BOOKS_SEARCH, payload:{filteredBooks : filteredBooksTemp}});
}

export const addBookDetails = (bookObj) =>(dispatch) =>{
    dispatch({type : ADD_NEW_BOOK, payload:{newBookObj : bookObj}})
}