import React from "react";
import { useState } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid({ movies, watchlist, toggleWatchlist }) {
  const [searchTerm, setSearch] = useState("");
  const [genre, setGenre] = useState("All Genre");
  const [rating, setRating] = useState("All");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  const matchesGenre = (movie, genre) => {
    return genre === "All Genre" || movie.genre.toLowerCase() === genre.toLowerCase();
  };

  const matchesSearchTerm = (movie, searchTerm) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const matchesRating = (movie, rating) => {
    return rating === "All" || movie.rating.toLowerCase() === rating.toLowerCase();
  };

  const filteredMovies = movies?.filter((movie) =>
    matchesSearchTerm(movie, searchTerm) &&
    matchesGenre(movie, genre) &&
    matchesRating(movie, rating)
  ) || [];

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select 
            className="filter-dropdown" 
            value={genre} 
            onChange={handleGenreChange}
          >
            <option>All Genre</option>
            <option>Action</option>
            <option>Drama</option>
            <option>Horror</option>
            <option>Fantasy</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select 
            className="filter-dropdown" 
            value={rating} 
            onChange={handleRatingChange}
          >
            <option>All</option>
            <option>Good</option>
            <option>Ok</option>
            <option>Bad</option>
          </select>
        </div>
      </div>
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard 
            movie={movie} 
            key={movie.id}
            isWatchlisted={watchlist.includes(movie.id)}
            toggleWatchlist={toggleWatchlist}
          />
        ))}
      </div>
    </div>
  );
}
