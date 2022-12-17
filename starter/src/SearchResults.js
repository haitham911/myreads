import React from "react";
import Bookshelf from "./bookshelf";
const SearchResults = ({ List, UpdateBooksListState,MyBooks }) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid"></ol>
      <Bookshelf shelf={List} UpdateBooksListState={UpdateBooksListState}  MyBooks={MyBooks} />
    </div>
  );
};

export default SearchResults;
