import React, {Component} from 'react';


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
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, 
                        backgroundImage: `url(${this.props.book.imageLinks.smallThumbnail})` }}>
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
                <div className="book-title">{this.props.book.title}</div>
                {this.props.book.authors.map((author,index) => (
                    <div key={`${author}-${index}`}className="book-authors">{author}</div>
                ))}
            </div>
       )
    }
   
}

export default Book;