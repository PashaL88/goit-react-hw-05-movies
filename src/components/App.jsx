import { Route, Routes } from 'react-router-dom';
import HeaderMenu from './Modules/HeaderMenu';

import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import CastPage from './pages/CastPage';
import ReviewsPage from './pages/ReviewsPage';

export const App = () => (
  <div className="App">
    <HeaderMenu />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="*" element={<HomePage />} />
      <Route path="/movies/:id" element={<MovieDetailsPage />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
    </Routes>
  </div>
);
