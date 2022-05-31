import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './movieDetailsPage.module.css';

import { getMovie } from 'components/shared/Fetch/fetch';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({
    items: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovie(id);
        console.log(result);
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          items: result,
        }));
      } catch (error) {
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchMovie();
  }, [id]);

  const { items, loading, error } = movie;
  const {
    title,
    vote_average,
    overview,
    poster_path,
    release_date,
    genres = [],
  } = items;
  const IMG_URL = 'https://image.tmdb.org/t/p/w500';
  console.log(genres);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <a href="/">Go back</a>
      {Object.keys(items).length > 0 && (
        <>
          <div className={styles.card}>
            <img
              className={styles.image}
              src={IMG_URL + poster_path}
              alt="{title}"
            />
            <div className={styles.description}>
              <h2>
                {title} ({release_date.slice(0, 4)})
              </h2>
              <p>User score: {vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>
                {genres.map(({ id, name }) => (
                  <span key={id}> {name}</span>
                ))}
              </p>
            </div>
          </div>
          <ul>
            Aditional information
            <li>Cast</li>
            <li>Reviews</li>
          </ul>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
