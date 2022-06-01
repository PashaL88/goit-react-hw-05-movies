import styles from './HeaderMenu.module.css';
import { NavLink } from 'react-router-dom';

const getActiveLink = ({ isActive }) => {
  return isActive ? `${styles.active}` : `${styles.link}`;
};

const HeaderMenu = () => {
  return (
    <ul className={styles.headerMenu}>
      <li className={styles.item}>
        <NavLink to="/" className={getActiveLink}>
          Home
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/movies" className={getActiveLink}>
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default HeaderMenu;
