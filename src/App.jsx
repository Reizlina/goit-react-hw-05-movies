import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';

import Layout from 'components/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const SearchFilms = lazy(() => import('./pages/SearchFilms/SearchFilms'));
const About = lazy(() => import('./pages/About/About'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<SearchFilms />} />
          <Route path="/movies/:id" element={<About />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </div>
  );
};
