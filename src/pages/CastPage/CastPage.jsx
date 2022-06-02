import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'components/shared/Fetch/fetch';

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

const CastPage = () => {
  const [cast, setCast] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      setCast(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getCast(id);
        setCast(prevState => ({
          ...prevState,
          loading: false,
          items: result.cast,
        }));
      } catch (error) {
        setCast(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchCast();
  }, [id]);

  const { items, loading, error } = cast;

  const elements = items.map(({ id, name, character, profile_path }) => (
    <li key={id}>
      <img src={IMG_URL + profile_path} alt={name} width="150" height={200} />
      <p>{name}</p>
      <p>Character: {character}</p>
    </li>
  ));

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items.length && <ul>{elements}</ul>}
    </>
  );
};

export default CastPage;
