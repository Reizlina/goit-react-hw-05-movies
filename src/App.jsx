import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import SearchFilms from 'pages/SearchFilms';
import NotFound from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<SearchFilms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
