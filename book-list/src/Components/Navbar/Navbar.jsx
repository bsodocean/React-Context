import React, { useContext } from 'react';
import { BookContext} from '../../Contexts/BookContext';
const Navbar = () => {
    const { books } = useContext(BookContext);
    return (
        <nav>
            <h1>Reading List</h1>
            <p>Currently you have {books.length} books to get through.</p>
        </nav>
      );
}
 
export default Navbar;