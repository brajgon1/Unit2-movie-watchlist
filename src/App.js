import { useEffect, useState } from "react";
import Header from "./components/Header";
import "./App.css";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";
// when using axios make sure to import it!!!

function App() {
  const [movieList, setMovieList] = useState([]);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const getData = () => {
    {
      const apiKey = process.env.REACT_APP_API_KEY;
      axios
        .get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
        )
        .then((res) => {
          setMovieList(res.data.results);
        });
    }
  };

  const addMovie = (movie) => {
    setList([...list, movie])
  };

  // use this template for useEffect. the useEffect Hook in React allows you to perform side effects in functional components, such as data fetching or DOM manipulation. It runs after every render and can optionally clean up any resources used by the effect.
  // line 25 invokes the above getData function
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          // props are passed in below
          movieList={movieList}
          page={page}
          setPage={setPage}
          list={list}
          addMovie={addMovie}
        />
        <Watchlist list={list}/>
      </main>
    </div>
  );
}

export default App;
