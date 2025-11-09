import Movie from "./Movie";
import Loader from "./Loader";

const MoviesList = ({ movies, onSelectMovie, isLoading }) => {
  return (
    <ul className="list list-movies">
      {isLoading ? (
        <Loader />
      ) : (
        movies?.map((movie) => (
          <Movie
            movie={movie}
            key={movie.imdbID}
            onSelectMovie={onSelectMovie}
            id={movie.imdbID}
          />
        ))
      )}
    </ul>
  );
};

export default MoviesList;
