import React from "react";
import MovieCard from "./MovieCard";

function MovieScreen({ movieList, addMovie, removeMovie, list }) {
  const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard key={index} movie={movie} list={list} addMovie={addMovie} removeMovie={removeMovie} />;
  });

  return (
    <div className="page">
      <h1>Brandon's Movie Theater</h1>
      <h3>Add a movie to your Watchlist!</h3>
      <div className="btn-container">
        <button>Previous</button>
        <button>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  );
}

export default MovieScreen;
