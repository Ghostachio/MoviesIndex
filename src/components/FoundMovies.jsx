import { useState } from "react";
import MoviesList from "./MoviesList";

const FoundMovies = ({ movies }) => {
  const [isOpen1, setIsOpen1] = useState(true);
  return (
    <section className="box">
      <button className="btn-toggle" onClick={() => setIsOpen1((open) => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MoviesList movies={movies} />}
    </section>
  );
};

export default FoundMovies;
