import { authors, books } from "../data/data";
import {
  GET_AUTHORS,
  GET_AUTHOR_BOOKS,
  GET_FILTERED_AUTHOR,
  RESET_AUTHOR_FILTER,
  SET_AUTHOR_SEARCH_KEYWORD,
  GET_FILTERED_BOOKS,
  GET_FILTERED_BOOKS_SEARCH,
  ADD_NEW_BOOK
} from "../dispatchRefs";

const initialState = {
  allAuthors : authors,
  authors: authors,
  books: books,
  activeAuthorID: "",
  activeAuthorBooks: [],
  authorSearch : "",
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      return state;
      break;
    case GET_AUTHOR_BOOKS:
      return {
        ...state,
        activeAuthorID: action.payload.author_id,
        activeAuthorBooks: action.payload.authorBooks,
      };
      case GET_FILTERED_AUTHOR : return {
        ...state,
        authors : action.payload.authorData
      }
      case RESET_AUTHOR_FILTER : return{
        ...state,
        authors : action.payload.authors,
        authorSearch : action.payload.keyword
      }
      case SET_AUTHOR_SEARCH_KEYWORD : return {
        ...state,
        authorSearch : action.payload.keyword
      }
      case GET_FILTERED_BOOKS : return {
        ...state,
        activeAuthorBooks : action.payload.filteredBooks
      }
      case GET_FILTERED_BOOKS_SEARCH : return {
        ...state,
        activeAuthorBooks : action.payload.filteredBooks
      }
      case ADD_NEW_BOOK :
      const bookTemp = [...state.books].concat(action.payload.newBookObj);
      const activBbookTemp = [...state.activeAuthorBooks].concat(action.payload.newBookObj);
      return {
        ...state,
        books : bookTemp,
        activeAuthorBooks : activBbookTemp
      }
    default:
      return state;
  }
};

export default authorReducer;
