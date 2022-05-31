import MoviesSearchForm from './MoviesSearchForm';
import { useState, useEffect } from 'react';
import { getMovie } from 'components/shared/Fetch/fetch';
import { Link } from 'react-router-dom';

const MoviesSearch = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [query, setQuery] = useState('');
  const onSubmit = ({ query }) => setQuery(query);

  useEffect(() => {
    const searchMovies = async () => {
      setMovies(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovie(query);
        console.log(result.results);
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          items: result.results,
        }));
      } catch (error) {
        setMovies(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    if (query) {
      searchMovies();
    }
  }, [query]);

  const { items, loading, error } = movies;

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      <MoviesSearchForm onSubmit={onSubmit} />
      {Boolean(items.length) && <ul>{elements}</ul>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesSearch;
