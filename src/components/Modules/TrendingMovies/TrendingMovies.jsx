import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingMovies = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
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
    })
  ),
};
