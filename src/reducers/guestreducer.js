import {books,authors } from "../data/data";
import {GET_ALL_BOOKS,GET_FILTER_BOOK_AUTHOR} from '../dispatchRefs'
const initialState = {
    books : books,
    allBooks : books,
    authors : authors
}
const GuestReducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_ALL_BOOKS :  return {
            ...state
        }
        case GET_FILTER_BOOK_AUTHOR : return{
            ...state,
            books : action.payload.books
        }
        default : return {...state}
    }
}
export default GuestReducer;