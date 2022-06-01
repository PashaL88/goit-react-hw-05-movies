import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'components/shared/Fetch/fetch';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState({
    items: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      setReviews(prevState => ({ ...prevState, loading: true }));
      try {
        const result = await getReviews(id);
        console.log(result.results);
        setReviews(prevState => ({
          ...prevState,
          loading: false,
          items: result.results,
        }));
      } catch (error) {
        setReviews(prevState => ({
          ...prevState,
          loading: false,
          error: error.message,
        }));
      }
    };
    fetchReviews();
  }, [id]);

  const { items, loading, error } = reviews;

  const elements = items.map(({ id, author, content }) => (
    <li key={id}>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </li>
  ));

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {items.length && <ul>{elements}</ul>}
      {!items.length && <p>We don't have any review for this movie.</p>}
    </>
  );
};

export default ReviewsPage;
