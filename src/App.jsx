import { Routes, Route, useNavigate } from 'react-router-dom';

import Layout from 'components/Layout';
import Home from './pages/Home';
import SearchFilms from 'pages/SearchFilms';
import About from 'pages/About';
import NotFound from 'pages/NotFound';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { useEffect, lazy, Suspense } from 'react';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  }, []);

  return (
    <div>
      {/* <Suspense></Suspense> */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<SearchFilms />} />
          <Route path="/movies/:id" element={<About />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
