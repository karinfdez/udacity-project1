import React from 'react';
import Book from './Book';

const BookCategory = () => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <li>
                        <Book />
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default BookCategory;