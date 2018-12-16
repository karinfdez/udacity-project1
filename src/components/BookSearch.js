import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';


class BookSearch  extends Component {
    state = {
        query: ''
    }
    searchBook = (e) => {
        this.setState({query: e.target.value}, () => {
            this.props.getAllBooksFromApi(this.state.query);
        });
    }
    render() {
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
                        onChange={this.searchBook} 
                        placeholder="Search by title or author"
                    />
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {this.props.books.length > 0 && this.props.books.map(book  => (
                        <li key={book.id}>
                            <Book 
                                book={book} 
                                changeShelf={this.props.changeShelf}
                            />
                        </li>
                    ))}
                </ol>
                </div>
            </div>
        )
    }
  
}

export default BookSearch;