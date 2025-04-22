import React from "react";
import { useState, useEffect} from "react";
import '../styles.css';


export default function MoviesGrid() {

    const [movies, setMovies ] = useState([]);

    

  
    useEffect(() => {
      
      fetch("movies.json")
      .then(response => response.json())
      .then(data => setMovies(data))
      
    }, [])
    return (
        <div className="movies-grid">
            {
        movies.map(movie => (
            <div className="movie-card" key={movie.id}>
                <img src={`images/${movie.image}`} alt={movie.title} />
                    <div className="movie-card-info">
                        <h2 className="movie-card-title">{movie.title}</h2>
                        <p className="movie-card-genre">{movie.genre}</p>
                        <p className="movie-card-rating" >Rating: {movie.rating}</p>                        
                    </div>
            </div>
        ))

            }
        </div>
    );
}