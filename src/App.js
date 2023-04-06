import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieCard from './components/MovieCard';
const App = () => {
	const [movies, setMovies] = useState([
		{
			Title: 'Star Wars: Episode IV - A New Hope',
			description:'',
			Poster:
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMAR95Za-yus9M2HoTP9Px8OquBC6ossXbYvlrrobV69je232l-Mxhql4wjFDzVsewmpA&usqp=CAU',
        rating:'',
		},
		{
			Title: 'Star Wars: Episode V - The Empire Strikes Back',
			description:'',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
        rating:'',
		},
		{
			Title: 'Star Wars: Episode VI - Return of the Jedi',
			description:'',
			Poster:
				'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
        rating:'',
		},
	]);

	return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
        <MovieCard/>
       
        <button>Add to new movie</button>
			</div>
		</div>
	);
};

export default App;
