import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';

import { getSearchFilms } from '../../api/Api';
import s from './SearchFilms.module.css';
import Notiflix from 'notiflix';

import FilmList from 'components/FilmList';
import Loader from 'components/Loader';

export default function SearchFilms() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  let find = searchParams.get('find') ?? '';

  useEffect(() => {
    if (find) {
      fetchFilms(find);
    }
    // eslint-disable-next-line
  }, [find]);

  const fetchFilms = async find => {
    setLoading(true);
    try {
      const data = await getSearchFilms(find.toLowerCase());
      if (!data.results.length) {
        setSearchParams('');
        setMovies([]);
        Notiflix.Notify.failure('Invalid request');
        return;
      }
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
    const form = e.currentTarget;
    form.reset();
  };

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
            required
          />
          <button className={s.btn}>Search</button>
        </div>
      </form>
      {movies.length > 0 && <FilmList movies={movies} />}
      {loading && <Loader />}
      {error && <h2>Oops, something went wrong...</h2>}
      <Outlet />
    </div>
  );
}
