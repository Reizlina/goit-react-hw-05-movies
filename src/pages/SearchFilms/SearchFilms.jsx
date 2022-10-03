import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { getSearchFilms } from '../../api/Api';
import s from './SearchFilms.module.css';

import FilmList from 'components/FilmList';
import Loader from 'components/Loader';

export default function SearchFilms() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const find = searchParams.get('find') ?? '';

  useEffect(() => {
    if (find) {
      fetchFilms(find);
    }
  }, [find]);

  const fetchFilms = async find => {
    setLoading(true);
    try {
      const data = await getSearchFilms(find.toLowerCase());
      setMovies(data.results);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    setSearchParams(value !== '' ? { find: value } : {});
  };

  // console.log(movies);

  return (
    <div>
      <form className={s.form} onSubmit={onFormSubmit}>
        <div className={s.wrap}>
          <input
            className={s.input}
            placeholder="Let's find it!"
            type="text"
            name="search"
            autoFocus
            autoComplete="off"
            required
            width="300"
          />
          <button className={s.btn}>Search</button>
        </div>
      </form>
      {movies.length > 0 && <FilmList movies={movies} />}
      {loading && <Loader />}
      <Outlet />
    </div>
  );
}
