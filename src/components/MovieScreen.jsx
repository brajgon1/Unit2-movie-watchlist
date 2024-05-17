import React from "react";

function MovieScreen({ list, page, setPage, movieList }) {

    const movieDisplay = movieList.map((movie, index) => {
        return <h2 key={index}>{movie.original_title}</h2>;
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
