import React from 'react';
import { Link } from 'react-router-dom';
import BookCategory from './BookCategory';

const BookShelf = (props) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
                {props.books.map(book => (
                    <BookCategory />
                ))}
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