const MovieDetails = ({ movieDetails, onAddMovie, movies }) => {
  const isWatched = movies.map((movie) => movie.imdbID).includes(movieDetails.imdbID);

  return (
    <header>
      <img src={movieDetails.Poster} alt={`Poster of ${movieDetails.Title} movie`} />
      <div className="details-overview">
        <h2>{movieDetails.Title}</h2>
        <p>
          {movieDetails.Released} &bull; {movieDetails.Runtime}
        </p>
        <p>{movieDetails.Genre}</p>
        <p>
          <span>⭐️</span>
          {movieDetails.imdbRating} IMDb rating
        </p>
        {!isWatched ? (
          <button className="btn-add" onClick={() => onAddMovie(movieDetails)}>
            + Add to list
          </button>
        ) : (
          <h3>Movie Already added</h3>
        )}
      </div>
    </header>
  );
};

export default MovieDetails;
