import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './components/BookSearch.js';
import ListBooks from './components/ListBooks.js';
import './App.css';

class BooksApp extends Component {
  
  state = {
    books : []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((res) => {
      return BooksAPI.getAll()
    })
    .then(allBooks => {
      this.setState({books : allBooks});
    })
  }

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
          books={this.state.books} 
          getAllBooksFromApi={this.getAllBooksFromApi}
          changeShelf={this.changeShelf}
        />
      )} />
      </div>
    )
  }
}

export default BooksApp
