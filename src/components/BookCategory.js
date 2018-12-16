import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';


const BookCategory = (props) => {
    const { category, changeShelf, booksCategory } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{category}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {booksCategory.map(book  => (
                        <li key={book.id}>
                            <Book 
                                book={book} 
                                changeShelf={changeShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

BookCategory.propTypes = {
    booksCategory: PropTypes.array.isRequired,
    category: PropTypes.string
}

export default BookCategory;