import React, { useState, createContext } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books, setBooks ] = useState([
        {title: 'The Little Prince', id: 1},
            {title: 'Metro 2033', id: 2},
                {title: 'Fahrenheit', id: 3}
    ])
    return (
        <BookContext.Provider value = {{books}} >
            {props.children}
        </BookContext.Provider> 
     );
}
 
export default BookContextProvider;