import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookSearch from './components/BookSearch.js';
import ListBooks from './components/ListBooks.js';
import './App.css'

class BooksApp extends Component {
  
  state = {
    books : [],
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(books => {
      this.setState({books});
    })
  }

  changeShelf= (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(categoryObj => {
      console.log(categoryObj);
      // console.log(categoryObj);
      // console.log('book id', book.id);
      // Object.keys(categoryObj).map(key => {
      //   categoryObj[key].map(bookId => {

      //   })
      // })
      // this.state.books.map(book => {
      //   console.log('book', book);
      // })
    })
  }

  render() {
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
      )} />
      <Route path='/search' render={() => (
        <BookSearch />
      )} />
      </div>
    )
  }
}

export default BooksApp
