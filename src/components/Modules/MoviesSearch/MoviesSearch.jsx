import MoviesSearchForm from './MoviesSearchForm';
import { useState, useEffect } from 'react';
import { getMovie } from 'components/shared/Fetch/fetch';
import { useSearchParams } from 'react-router-dom';
import TrendingMovies from '../TrendingMovies';

const MoviesSearch = () => {
  const [movies, setMovies] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const onSubmit = ({ query }) => setSearchParams({ query });
  const q = searchParams.get('query');

  useEffect(() => {
    const searchMovies = async () => {
      setMovies(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovie(q);
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
    if (q) {
      searchMovies();
    }
  }, [q]);

  const { items, loading, error } = movies;

  return (
    <>
      <MoviesSearchForm onSubmit={onSubmit} />
      <TrendingMovies items={items} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default MoviesSearch;
