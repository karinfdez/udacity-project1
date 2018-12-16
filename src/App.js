import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './components/BookSearch.js';
import BookShelf from './components/ListBooks.js';
import './App.css'

class BooksApp extends Component {
  
  state = {
    books : [],
    currentlyReading: false,
    wantToRead: false,
    read: false
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({books})
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <BookShelf {...this.state} />
      )} />
      <Route path='/search' render={() => (
        <BookSearch />
      )} />
      </div>
    )
  }
}

export default BooksApp
