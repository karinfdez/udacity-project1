import React from 'react';
import { Link } from 'react-router-dom';
import BookCategory from './BookCategory';

const BookShelf = (props) => {
    let currentlyReading = [];
    let wantToRead = [];
    let read = [];

    props.books.map(book => {
        if(book.shelf === props.currentlyReading) {
            currentlyReading.push(book);
        } else if(book.shelf === props.wantToRead) {
            wantToRead.push(book);
        } else {
            read.push(book);
        }
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <BookCategory booksCategory={currentlyReading} category='Currently Reading'/>
                <BookCategory booksCategory={wantToRead} category='Want to Read'/>
                <BookCategory booksCategory={read} category='Read' />
            </div>
            </div>
            <div className="open-search">
                <Link to='/search'>
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}

export default BookShelf;