import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getTrending } from '../../shared/Fetch/fetch';

const TrendingMovies = () => {
  const [trending, setTrending] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchTrending = async () => {
      setTrending(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getTrending();
        setTrending(prevState => ({
          ...prevState,
          loading: false,
          items: result.results,
        }));
      } catch (error) {
        setTrending(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchTrending();
  }, []);

  const { items, loading, error } = trending;

  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return (
    <>
      {Boolean(items.length) && <ul>{elements}</ul>}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </>
  );
};

export default TrendingMovies;
