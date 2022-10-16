import { useState } from "react";
import MovieCard from "./MovieCard";
import SearhIcon from "./search.svg";

import "./App.css";

// omdbapi
// Here is your key: 9e77328c
// Please append it to all of your API requests,
// OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=9e77328c

const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=9e77328c";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  const searchMovies = async (title) => {
    const moviesArray = [];
    const allResultsArray = [];
    let pageCount = 1;
    // max 3 pages to reduce calls on dev env
    while (pageCount <= 3) {
      // api search call with title and page =1
      const response = await fetch(`${API_URL}&s=${title}&page=${pageCount}`);
      // getting the data to json
      const data = await response.json();
      // each call pushes data to moviearray
      moviesArray.push(data.Search);
      // nextpage
      pageCount++;
    }

    // creates allresults array from all data of moviesarray
    moviesArray.forEach((item) => {
      item.forEach((subitem) => {
        allResultsArray.push(subitem);
      });
    });

    setMovies(allResultsArray);
  };

  return (
    <div className="app">
      <h1>MovieWorld</h1>

      <div className="search">
        <input
          value={searchTerm}
          placeholder="Search for movies"
          onChange={(e) => setSearchTerm(e.target.value)}
          // added onkey down search
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchMovies(searchTerm);
            }
          }}
        />
        <img
          src={SearhIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
