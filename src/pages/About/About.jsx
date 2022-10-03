import { Outlet, useParams, Link, useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { getInfoFilms } from 'api/Api';

import Loader from 'components/Loader';

import s from './About.module.css';

const About = () => {
  const [result, setResult] = useState([]);

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
      setResult(data);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const { poster_path, title, release_date, overview, genres, vote_average } =
    result;

  let posterImg =
    poster_path && 'https://image.tmdb.org/t/p/w500' + poster_path;
  const FilmGenres = genres?.map(el => el.name).join(', ');

  return (
    <>
      <div className={s.wrap}>
        {loading && <Loader />}

        <img
          src={
            poster_path
              ? posterImg
              : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
          }
          width="250"
        />
        <div className={s.info}>
          <h2>
            {title} &#40;{release_date?.slice(0, 4)}&#41;
          </h2>
          <p>User score&#58; {Math.round((vote_average / 10) * 100)}&#37;</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{FilmGenres}</p>
        </div>
      </div>
      <div className={s.more_info}>
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
