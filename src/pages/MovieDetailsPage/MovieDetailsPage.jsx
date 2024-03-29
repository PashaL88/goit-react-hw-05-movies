import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './movieDetailsPage.module.css';

import { getMovieById } from 'components/shared/Fetch/fetch';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({
    content: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const from = location?.state?.from || '/';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      setMovie(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getMovieById(id);
        setMovie(prevState => ({
          ...prevState,
          loading: false,
          content: result,
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

  const { content, loading, error } = movie;
  const {
    title,
    vote_average,
    overview,
    poster_path,
    release_date,
    genres = [],
  } = content;

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Not found description of this film</p>}
      <button type="button" onClick={goBack}>
        Go back
      </button>
      {Object.keys(content).length > 0 && (
        <>
          <div className={styles.card}>
            {poster_path && (
              <img
                className={styles.image}
                src={IMG_URL + poster_path}
                alt={title}
              />
            )}
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
          <p>Aditional information</p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link
                state={{ from }}
                className={styles.link}
                to={`/movies/${id}/cast`}
              >
                Cast
              </Link>
            </li>
            <li className={styles.item}>
              <Link
                state={{ from }}
                className={styles.link}
                to={`/movies/${id}/reviews`}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
