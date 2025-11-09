const Header = ({ movies, onSetQuery, query }) => {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>Movie Index</h1>
      </div>
      <input
        className="search"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={onSetQuery}
      />
      <p className="num-results">
        Found <strong>{movies?.length}</strong> results
      </p>
    </nav>
  );
};

export default Header;
