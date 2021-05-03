import {GET_AUTHORS,GET_AUTHOR_BOOKS,GET_FILTERED_AUTHOR,RESET_AUTHOR_FILTER,SET_AUTHOR_SEARCH_KEYWORD} from '../dispatchRefs';
import { authors} from "../data/data"
export const getAuthors=()=> async (dispatch)=>{
    dispatch({type : GET_AUTHORS});
}
export const getAuthorBooks = (authorID) => async (dispatch,getState) =>{
    const Books = getState().author.books;
    const author_books = Books.filter(item =>{
        return (item.author_id === authorID)
    })
    await dispatch({type : GET_AUTHOR_BOOKS,payload:{author_id : authorID,authorBooks : author_books}});
    return getState().author;
}
export const applyAuthorFilterAction = (name) => async(dispatch) =>{

    const filteredAuthors = authors.filter(item=>{
        return item.author_name.toLowerCase().indexOf(name.toLowerCase()) >= 0
    });
    dispatch({type : GET_FILTERED_AUTHOR, payload:{authorData : filteredAuthors}});
} 
export const resetAuthorFilterAction =()=>(dispatch)=>{
    dispatch({type:RESET_AUTHOR_FILTER, payload : {authors : authors,keyword : ""}})
}

export const setAuthorSearchKeywordAction = (keyword) =>(dispatch)=>{
    dispatch({type : SET_AUTHOR_SEARCH_KEYWORD, payload:{keyword : keyword}});
}