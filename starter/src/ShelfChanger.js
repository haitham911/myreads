import React from "react";
import * as BooksAPI from "./BooksAPI";
import {useState,useEffect} from 'react';

const ShelfChanger = ({ currentBook, UpdateBooksListState,MyBooks }) => {
  const [book,SetBook] = useState({})
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

  useEffect(()=>{
    if (MyBooks !== undefined ){
    
     const setShelf = ()=>{
      let mybook ={}
      mybook = MyBooks.filter((current)=>{return current.id === currentBook.id})
      if(mybook.length >0){
        currentBook.shelf = mybook[0].shelf
        SetBook(currentBook)
      }else{
        mybook =currentBook
        mybook.shelf ="none"
        SetBook(mybook)
      }

     }
     setShelf()
 
    }else{
      const setCurrent = ()=>{
        SetBook(currentBook)

      }
      setCurrent()
    }
    
  })
  
  
  return (
    <div>
    <div className="book-shelf-changer">
      <select
        key={book.id}
        onChange={(e) => {
          handleChange(book, e.target.value,e);
        }}
        value={ book.shelf }
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
