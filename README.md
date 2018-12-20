# MyReads: A Book Tracking App Project

This is the first project for Udacity's React Fundamentals course. This project is intended to create a bookshelf app 
that allows to select and categorize books that have been read, are currently reading, or want to read. 


## TL;DR

Steps to start development:

* install all project dependencies with `npm install`
* start the development server with `npm start`


## Backend Server

To simplify development process, it is provided a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods 
that will be need it to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)


## App functionality

- In this application, the main page displays a list of "shelves" (i.e. categories), each of 
which contains a number of books. The three shelves(categories) are:

* Currently Reading
* Want to Read
* Read

- Each book has a control that lets select the shelf for that book. 
When a different shelf is selected, the book moves there. 

- The main page also has a link to /search (a search page that allows to find books to add to the library)
As the value of the text input to search for books changes, the books that match that query are displayed 
on the page, along with a control that lets add the book to the library. 

- When a book is on a bookshelf, it should have the same state on both the main application page and the search page.

- The search page also has a link to / (the root URL), which leads back to the main page with any changes updated.