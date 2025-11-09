import { useState } from "react";
import MoviesList from "./MoviesList";

const FoundMovies = ({ movies, onSelectMovie, isLoading }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <section className="box">
      <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && (
        <MoviesList movies={movies} onSelectMovie={onSelectMovie} isLoading={isLoading} />
      )}
    </section>
  );
};

export default FoundMovies;
