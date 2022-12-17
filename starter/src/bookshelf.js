import React from "react";
import Book from "./Books";

const Bookshelf = ({ shelf, UpdateBooksListState,MyBooks }) => {
  return (
    <div className="bookshelf-books">
      <ol className="books-grid">
        {shelf.length > 0 &&
          shelf.map((book) => (
            <Book
              key={book.id}
              book={book}
              UpdateBooksListState={UpdateBooksListState}
              MyBooks={MyBooks}
            />
          ))}
      </ol>
    </div>
  );
};

export default Bookshelf;
