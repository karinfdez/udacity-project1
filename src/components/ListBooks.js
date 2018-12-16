import React from 'react';
import { Link } from 'react-router-dom';
import BookCategory from './BookCategory';
import PropTypes from 'prop-types';

const BookShelf = (props) => {
    const {books, changeShelf} = props;
    let currentlyReadingArray = [];
    let wantToReadArray = [];
    let readArray = [];
    let categories = {
        currentlyReading: {
            bookCategory: 'currentlyReading',
            name: 'Currently Reading'
        },
        wantToRead: {
            bookCategory: 'wantToRead',
            name: 'Want to Read'
        },
        read: {
            bookCategory: 'read',
            name: 'Read'
        }
    }
    const { currentlyReading, wantToRead, read } = categories;

    books.forEach(book => {
        if(book.shelf === currentlyReading.bookCategory) {
            currentlyReadingArray.push(book);
        } else if(book.shelf === wantToRead.bookCategory) {
            wantToReadArray.push(book);
        } else {
            readArray.push(book);
        }
    })

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                <BookCategory 
                    changeShelf={changeShelf} 
                    booksCategory={currentlyReadingArray} 
                    category={currentlyReading.name}
                />
                <BookCategory 
                    changeShelf={changeShelf} 
                    booksCategory={wantToReadArray} 
                    category={wantToRead.name}
                />
                <BookCategory 
                    changeShelf={changeShelf} 
                    booksCategory={readArray} 
                    category={read.name} 
                />
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

BookShelf.propTypes = {
    books: PropTypes.array.isRequired
}

export default BookShelf;