import styles from './moviesPage.module.css';
import MoviesSearch from 'components/Modules/MoviesSearch';

const MoviesPage = () => {
  return (
    <div className={styles.moviesPage}>
      <MoviesSearch />
    </div>
  );
};

export default MoviesPage;
