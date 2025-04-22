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
        <div className="movie-card">
            {
        movies.map(movie => (
            <div className="movie-card" key={movie.id}>
                <img src={`images/${movie.image}`} alt={movie.title} />
                    <div className="movies-card-info">
                        <h2>{movie.title}</h2>
                        <p>{movie.description}</p>
                        <p>Rating: {movie.rating}</p>                        
                    </div>
            </div>
        ))

            }
        </div>
    );
}