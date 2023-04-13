import React from 'react';
import { useState } from "react";
import "./movie.css";
import { Button, Movie } from "react-bootstrap";
import { AiTwotoneLike } from "react-icons/ai";
const MovieCard = ({ propsMovie, handleLike, del, handleAddToMovie  }) => {
  const { title, description, image, rate,id } =
    propsMovie;
  const [like, setlike] = useState(false);
  const likeMovie= () => {
    setlike(true);
    handleLike(propsMovie.id);
  };
  return (
    <Movie style={{ width: "18rem" }}>
      <Movie.Img variant="top" src={image} />
      <Movie.Body>
      <Movie.Text>image</Movie.Text>
        <Movie.Title>{title}</Movie.Title>
        <Movie.Text>{description}</Movie.Text>
        <Movie.Text>rate</Movie.Text>
        <Button variant="primary">Edit </Button>
        <Button onClick={() => del(id)} variant="primary">
          X
        </Button>

        <Button onClick={() => handleAddToMovie(propsMovie)} variant="primary">
          Add to Movie
        </Button>
        <div>
          <AiTwotoneLike onClick={likeMovie} className={like ? "like" : null} />

        </div>
      </Movie.Body>
    </Movie>
  );
};

export default MovieCard;
