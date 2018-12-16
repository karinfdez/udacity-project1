import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {

    state = {
        shelf: this.props.book.shelf
    }

    updateShelf = (e) => {
        this.setState({shelf: e.target.value}, () => {
            this.props.changeShelf(this.props.book, this.state.shelf);
        });
    }
    
    render() {
        const { book } = this.props;
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={this.state.shelf} onChange={this.updateShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                {book.authors.map((author,index) => (
                    <div key={`${author}-${index}`}className="book-authors">{author}</div>
                ))}
            </div>
       )
    }
   
}

Book.propTypes = {
    book: PropTypes.object
}

export default Book;