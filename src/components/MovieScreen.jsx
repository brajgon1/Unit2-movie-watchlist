import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({ movieList, addMovie }) {
  const movieDisplay = movieList.map((movie) => {
    return <MovieCard movie={movie} addMovie={addMovie} />;
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
