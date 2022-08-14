import './App.css';
import NewBookForm from './Components/BookForm/BookForm';
import BookList from './Components/BookList/BookList';
import Navbar from './Components/Navbar/Navbar';
import BookContextProvider from './Contexts/BookContext';

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <NewBookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
