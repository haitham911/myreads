import "./App.css";

import BooksSearch from "./Search";
import BooksList from "./BooksList";
import { Route, Routes } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

function App() {
 
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const getALLBooks = async () => {
      let res = [];
      res = await BooksAPI.getAll().catch((err) => {
        console.log(err);
      });
      if (res.length > 0) {
        setBooks(res)
      }
    };
    getALLBooks();
  }, []);
  //(book, shelf)
  const UpdateBooksListState = (book, shelf) => {
    book.shelf = shelf;
    if (shelf === "none") {
      setBooks( books.filter((b) => b.id !== book.id));
    } else {
      book.shelf = shelf;
      setBooks(books.filter((b) => b.id !== book.id).concat(book));
      
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BooksList
              BooksListState={books}
              UpdateBooksListState={UpdateBooksListState}
            />
          }
        />
        <Route
          path="/search"
          element={<BooksSearch UpdateBooksListState={UpdateBooksListState} MyBooks={books}/>}
        />
      </Routes>
    </div>
  );
}

export default App;
