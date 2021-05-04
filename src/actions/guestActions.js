import { GET_ALL_BOOKS, GET_FILTER_BOOK_AUTHOR } from "../dispatchRefs";
export const getAllBooksAction = () => (dispatch) => {
  dispatch({ type: GET_ALL_BOOKS });
};
export const applytBookAuthorFilterAction = (authorKeyword, bookKeyword) => (
  dispatch,
  getState
) => {
  const authorRed = getState().author;
  const { allBooks, authors } = getState().guest;
  if (authorRed.books) {
    const allBooks = authorRed.books;
    const authors = authorRed.allAuthors;
  } else {
    const { allBooks, authors } = getState().guest;
  }
  const filered = allBooks.filter((item) => {
    return (
      item.name.toLowerCase().indexOf(bookKeyword.toLowerCase()) >= 0 &&
      authors.filter((auth) => {
        return (
          auth.author_name.toLowerCase().indexOf(authorKeyword.toLowerCase()) >=
            0 && auth.id == item.author_id
        );
      }).length > 0
    );
  });
  dispatch({ type: GET_FILTER_BOOK_AUTHOR, payload: { books: filered } });
};
