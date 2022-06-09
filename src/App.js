import './App.css';
import Navbar from './components/Navbar/Navbar';
import Booklist from './components/Booklist/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
      <AuthContextProvider>
      <Navbar />
      <BookContextProvider>
      <Booklist /> 
      </BookContextProvider>
      <ThemeToggle />
      </AuthContextProvider> 
      </ThemeContextProvider>  
    </div>
  );
}

export default App;
