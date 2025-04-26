import React from "react";
import { useState, useEffect } from "react";
import "../styles.css";
import MovieCard from "./MovieCard";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
const filterredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
);


  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);
  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <div className="movies-grid">
        {filterredMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}></MovieCard>
        ))}
      </div>
    </div>
  );
}
