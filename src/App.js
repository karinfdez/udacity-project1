import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './components/BookSearch.js';
import ListBooks from './components/ListBooks.js';
import './App.css';
import _ from 'lodash';

class BooksApp extends Component {
  
  state = {
    books : [],
    listAllCategoriesBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.updateBooks(books);
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      let referenceBooks = this.state.books;
      let refIndex = referenceBooks.findIndex(refBook => 
        refBook.id === book.id);
      referenceBooks[refIndex].shelf = shelf;
      this.updateBooks(referenceBooks);
    })
  }

  updateBooks = (books) => {
    this.setState({books})
  }

  getAllBooksFromApi = _.debounce((query) => {
    BooksAPI.search(query).then(books => {
      if (books instanceof Array) {
        this.setState({ listAllCategoriesBooks: books });
      } 
    });
  }, 500);

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks 
          books={this.state.books} 
          changeShelf={this.changeShelf}
        />
      )} />
      <Route path='/search' render={() => (
        <BookSearch 
          books={this.state.listAllCategoriesBooks} 
          getAllBooksFromApi={this.getAllBooksFromApi}
        />
      )} />
      </div>
    )
  }
}

export default BooksApp
