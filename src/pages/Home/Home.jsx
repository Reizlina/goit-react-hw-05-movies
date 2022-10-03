import React, { useState, useEffect } from 'react';
import { getTrendingFilms } from '../../api/Api';

import FilmList from 'components/FilmList';
import Loader from 'components/Loader';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const data = await getTrendingFilms();
      // console.log(data);
      setMovies(data.results);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Trending today</h1>
      <FilmList movies={movies} />
      {loading && <Loader />}
    </>
  );
}
