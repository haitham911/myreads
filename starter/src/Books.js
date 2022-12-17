import React from "react";
import ShelfChanger from "./ShelfChanger";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Book = ({ book, UpdateBooksListState,MyBooks }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : "icons/book-placeholder.svg"
              })`,
            }}
          />
          <ShelfChanger
            currentBook={book}
            UpdateBooksListState={UpdateBooksListState}
            MyBooks={MyBooks}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors ? book.authors.join(", ") : "Unknown Author"}

        </div>
        <Popup
            trigger={<div className="book-info">more info ....</div>}
            modal 
          >
            <div>
           
              <div className="header" >Book title : <span>{book.title}</span> </div>
              {' '}
              <div className="modal-content">
              <div className="book-title">Authors : <span>{book.authors} </span></div>
              <div className="book-title">Categories : <span>{book.categories}</span></div>
              <div className="book-title">Description : <span>{book.description}</span></div>
              <div className="book-title">Pages : {book.pageCount}</div>
              </div>
              
            </div>
          </Popup>
      </div>
    </li>
  );
};

export default Book;
