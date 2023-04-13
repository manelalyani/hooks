import "./App.css";
import AddMovies from "./components/AddMovies";
import MovieList from "./components/MovieList";
import { useState } from "react";
import { movies } from "./data";
const App () => {
  const [movies, setMovie] = useState(movies);
  
  const [titleFilter, setTitleFilter] = useState('');
  const [rateFilter, setRateFilter] = useState('');

  const handleTitleChange = e => {
    setTitleFilter(e.target.value);
  };

  const handleRateChange = e => {
    setRateFilter(e.target.value);
  };

  const filteredMovies = movies.filter(movie => {
    const titleMatch = movie.title.toLowerCase().includes(titleFilter.toLowerCase());
    const rateMatch = rateFilter === '' || movie.rate === parseInt(rateFilter);
    return titleMatch && rateMatch;
  });

  const handleAddToMovie = movie => {
    setMovie([...movie, movie]);
  };
}
export default App;
