import React, { useContext } from 'react'
import { BookContext }  from '../../Contexts/BookContext';

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);  
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id})}>
        <div className="book-title">{book.title}</div>
        <div className="book-author">{book.author}</div>
    </li>
  )
}

export default BookDetails;