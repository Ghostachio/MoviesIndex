import { useState } from "react";
import Statistics from "./Statistics";
import MoviesList from "./MoviesList";
const WatchedMovies = ({ movies }) => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen2((open) => !open)}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <Statistics movies={movies} />
          <MoviesList movies={movies} />
        </>
      )}
    </div>
  );
};

export default WatchedMovies;
