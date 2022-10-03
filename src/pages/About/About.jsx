import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { getInfoFilms } from 'api/Api';

import Loader from 'components/Loader';

import s from './About.module.css';

const About = () => {
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useLocation();

  useEffect(() => {
    fetchFilms();
  }, []);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const data = await getInfoFilms(id);
      setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
      setTitle(data.title);
      setReleaseDate(data.release_date.slice(0, 4));
      setOverview(data.overview);
      setGenres(data.genres);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const FilmGenres = genres.map(el => el.name).join(', ');

  return (
    <>
      <div className={s.wrap}>
        {loading && <Loader />}
        <img src={poster} width="250" />
        <div className={s.info}>
          <h2>
            {title} &#40;{releaseDate}&#41;
          </h2>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{FilmGenres}</p>
        </div>
      </div>
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to={'cast'} state={{ from: navigate }}>
              Cast
            </Link>
          </li>
          <li>
            <Link to={'reviews'} state={{ from: navigate }}>
              Reviews
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default About;
