import './App.css';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import Watchlist from './components/Watchlist';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  
  return (
    <>
    
    <div className='container'>
      <Header/>

      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/watchlist">Watchlist</Link>
        </nav>
        <Routes>
          <Route path="/" element={<MoviesGrid/>}/>
          <Route path="/watchlist" element={<Watchlist/>}/>
        </Routes>
      </Router>
    </div>
    </>

  )
}

export default App
