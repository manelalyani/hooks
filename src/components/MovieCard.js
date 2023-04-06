import React from 'react';

const MovieCard = ({ Title, description,Poster, rating }) => {
  return (
    <div className="movie-card">
      <img src={Poster} alt={Title} />
      <div className="movie-info">
        <h3>{Title}</h3>
        <p>{description}</p>
        <p>rating: {rating}</p>
      </div>
    </div>
  );
};

export default MovieCard;
