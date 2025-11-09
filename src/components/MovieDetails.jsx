const MovieDetails = ({ movieDetails }) => {
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
      </div>
    </header>
  );
};

export default MovieDetails;
