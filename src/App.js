import { useEffect, useState } from 'react';
import Header from './components/Header'
import './App.css';

function App() {

  const [movie, setMovie] = useState("")
  const [watchlist, setWatchlist] = useState("")
  const [page, setPage] = useState(1)

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
