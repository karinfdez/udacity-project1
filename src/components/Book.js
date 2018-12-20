import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    state = {
        value: ''
    }
    updateShelf = (e) => {
        this.setState({value: e.target.value}, () => {
            this.props.changeShelf(this.props.book, this.state.value);
        });
    }
    
    render() {
        const { book: {imageLinks, title, authors} } = this.props;
        const backImage = imageLinks && imageLinks.smallThumbnail ? imageLinks.smallThumbnail : '';
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${backImage})` }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select value={this.props.book.shelf || 'none'} onChange={this.updateShelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                {authors && typeof authors === 'object' && authors.length > 0 && 
                authors.map((author,index) => (
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