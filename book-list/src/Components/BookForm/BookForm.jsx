import React, { useContext, useState } from 'react';
import { BookContext } from '../../Contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext); 
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch  ({type: 'ADD_BOOK', book: {
        title, author 
        }});
        setTitle('');
        setAuthor('');
    }
  return (
    <form onSubmit={ handleSubmit }>
        <input type="text" placeholder="Enter book name." value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Enter book author." value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        <input type="submit" placeholder="Save book." value='add book'/>
    </form>
  )
}

export default NewBookForm;