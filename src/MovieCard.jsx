import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie" key="{movie}">
            <div className="movie-title">
                <p>{movie.Year}</p>
            </div>
            <div className="movie-image">
                <img
                    src={
                        movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/400"
                    }
                    alt="{movie1.Title}"
                />
            </div>
            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
}

export default MovieCard;



