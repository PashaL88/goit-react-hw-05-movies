import TrendingMovies from 'components/Modules/TrendingMovies';
import { useState, useEffect } from 'react';

import { getTrending } from '../../shared/Fetch/fetch';

const HomePage = () => {
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
  return (
    <div>
      <h3>Trending today</h3>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <TrendingMovies items={items} />
    </div>
  );
};

export default HomePage;
