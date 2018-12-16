import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';


const BookSearch  = (props) => {
    
    const searchBook = (e) => {
        const query = e.target.value;
        props.getAllBooksFromApi(query);

    }
    return (
        <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'>
                <button className="close-search">
                    Close
                </button>
            </Link>
            <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    onChange={searchBook} 
                    placeholder="Search by title or author"
                />
            </div>
            </div>
            <div className="search-books-results">
            <ol className="books-grid">
                {props.books.map(book  => (
                    <li key={book.id}>
                        <Book 
                            book={book} 
                        />
                    </li>
                ))}
            </ol>
            </div>
        </div>
    )
}

export default BookSearch;