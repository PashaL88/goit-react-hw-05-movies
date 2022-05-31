import { Link } from 'react-router-dom';

const TrendingMovies = ({ items }) => {
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title}</Link>
    </li>
  ));

  return <>{Boolean(items.length) && <ul>{elements}</ul>}</>;
};

export default TrendingMovies;
