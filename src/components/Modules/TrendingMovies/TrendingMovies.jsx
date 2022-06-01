import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingMovies = ({ items }) => {
  const location = useLocation();

  const elements = items.map(({ id, title, original_name }) => (
    <li key={id}>
      {title && (
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {title}
        </Link>
      )}
      {!title && (
        <Link state={{ from: location }} to={`/movies/${id}`}>
          {original_name}
        </Link>
      )}
    </li>
  ));

  return <>{Boolean(items.length) && <ul>{elements}</ul>}</>;
};

export default TrendingMovies;

TrendingMovies.defaultProps = {
  items: [],
};

TrendingMovies.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      original_name: PropTypes.string,
    })
  ),
};
