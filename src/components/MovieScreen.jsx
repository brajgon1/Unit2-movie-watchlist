import React from "react";
import MovieCard from "./components/MovieCard"

function MovieScreen({ list, page, setPage, movieList }) {

    const movieDisplay = movieList.map((movie, index) => {
        return <MovieCard movie={movie}/>
     });

  return (
    <div className="page">
      <h1>Brandon's Movie Theater</h1>
      <h3>Add a movie to your Watchlist!</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
