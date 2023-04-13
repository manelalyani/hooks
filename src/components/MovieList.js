import React from "react";
import MovieCard from "./Moviecard";
const MovieList = ({ propsMovie, handleLike, del, handleAddToMovie }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {propsMovie.map((movie) => (
        <MovieCard
          handleAddToCart={handleAddToMovie}
          propsprod={movie}
          key={movie.id}
          del={del}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
};

export default MovieList;

