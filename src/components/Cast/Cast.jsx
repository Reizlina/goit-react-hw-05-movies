import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getInfoCast } from 'api/Api';

import s from './Cast.module.css';

import Loader from 'components/Loader';

const Cast = () => {
  const [castInfo, setCastInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFilms();
    // eslint-disable-next-line
  }, []);

  const fetchFilms = async () => {
    setLoading(true);
    try {
      const data = await getInfoCast(id);
      setCastInfo(data.cast.slice(0, 20));
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const filmNames = castInfo.map(
    ({ character, cast_id, name, profile_path }) => {
      return (
        <li key={cast_id}>
          <img
            alt={name}
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500${profile_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
            }
            width="100"
          />
          <p>{name}</p>
          <p>Character: {character}</p>
        </li>
      );
    }
  );

  return (
    <>
      {loading && <Loader />}
      {error && <h2>Oops, something went wrong...</h2>}
      {castInfo.length ? (
        <ul className={s.list}>{filmNames}</ul>
      ) : (
        <p className={s.text}>We don't have any actors for this movie</p>
      )}
    </>
  );
};
export default Cast;
