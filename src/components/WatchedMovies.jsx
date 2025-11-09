/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Statistics from "./Statistics";
import WatchedMoviesList from "./WatchedMoviesList";
import MovieDetails from "./MovieDetails";

const WatchedMovies = ({ movies, selected, onAddMovie, keyCode }) => {
  const [isOpen2, setIsOpen2] = useState(true);
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getSelectedMovie = async () => {
      // if (!selected) {
      //   setMovieDetails(null);
      //   return;
      // }
      const res = await fetch(`http://www.omdbapi.com/?apikey=${keyCode}&i=${selected}`);
      const data = await res.json();
      setMovieDetails(data);
    };
    getSelectedMovie();
  }, [selected]);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </button>

      {isOpen2 &&
        (selected ? (
          <MovieDetails
            movieDetails={movieDetails}
            onAddMovie={onAddMovie}
            movies={movies}
          />
        ) : (
          <>
            <Statistics movies={movies} />
            <WatchedMoviesList movies={movies} />
          </>
        ))}
    </div>
  );
};

export default WatchedMovies;
