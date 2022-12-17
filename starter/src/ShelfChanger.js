import React from "react";
import * as BooksAPI from "./BooksAPI";

const ShelfChanger = ({ currentBook, UpdateBooksListState }) => {

  const handleChange = (book, shelf,event) => {
    event.preventDefault();
    const updateBooks = async () => {
      await BooksAPI.update(book, shelf).catch((err) => {
        console.log(err);
      });

      UpdateBooksListState(book, shelf);
    };
    updateBooks();
  };
  

  
  return (
    <div>
    <div className="book-shelf-changer">
      <select
        key={currentBook.id}
        onChange={(e) => {
          handleChange(currentBook, e.target.value,e);
        }}
        value={ currentBook.shelf === undefined ? "none" :currentBook.shelf }
      >
        <option value="move" disabled>Move to... </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
      
    </div>
  
    </div>
  );
};

export default ShelfChanger;
