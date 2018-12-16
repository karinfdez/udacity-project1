import React from 'react';
import Book from './Book';

const BookCategory = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.category}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.booksCategory.map(book  => (
                        <li key={book.id}>
                            <Book book={book} changeShelf={props.changeShelf}/>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default BookCategory;