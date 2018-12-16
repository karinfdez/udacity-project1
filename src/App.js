import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './components/BookSearch.js';
import ListBooks from './components/ListBooks.js';
import './App.css'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.readingNow = [];
    this.wantToRead = [];
    this.read = [];
  }
  state = {
    books : [],
    currentlyReading: 'currentlyReading',
    wantToRead: 'wantToRead',
    read: 'read'
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({books});
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks {...this.state} />
      )} />
      <Route path='/search' render={() => (
        <BookSearch />
      )} />
      </div>
    )
  }
}

export default BooksApp
