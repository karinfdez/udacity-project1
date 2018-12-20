import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';
import _ from 'lodash';
import * as BooksAPI from '../BooksAPI'


class BookSearch  extends Component {
    state = {
        query: '',
        listBooks: []
    }

    updateBooks = (searchedBooks, categorizedBooks) => {
        searchedBooks.forEach((searchBook) => {
            const categoryBook = categorizedBooks.find((categoryBook) => 
            categoryBook.id === searchBook.id)
            if (categoryBook) {
                searchBook.shelf = categoryBook.shelf
            }
        })
        return searchedBooks;
    }

    getBooksBasedOnSearch = _.debounce((query) => {
        if(query) {
            BooksAPI.search(query)
            .then((allBooks) => {
                if(allBooks instanceof Array) {
                    const shelfedBooks = this.updateBooks(allBooks, this.props.books);
                    this.setState({ listBooks: shelfedBooks });
                } 
            })       
        } 
      }, 100);
    
    searchBook = (e) => {
        this.setState({query: e.target.value}, () => {
            this.getBooksBasedOnSearch(this.state.query);
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
                    {this.state.query && this.state.listBooks.length > 0 && 
                    this.state.listBooks.map(book  => (
                        <li key={book.id}>
                            <Book 
                                book={book} 
                                changeShelf={this.props.changeShelf}
                                books = {this.state.listBooks}
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