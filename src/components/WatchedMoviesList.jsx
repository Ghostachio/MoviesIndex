import Movie from "./Movie";

const WatchedMoviesList = ({ movies }) => {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export default WatchedMoviesList;
