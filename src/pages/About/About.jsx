import { useParams, useLocation, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import { getInfoFilms } from 'api/Api';

import Loader from 'components/Loader';
import AdditionalInfo from 'components/AdditionalInfo';
import FilmInfo from 'components/FilmInfo';
import Button from 'components/Button';

const About = () => {
  const [result, setResult] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    fetchFilms();
    // eslint-disable-next-line
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

  const filmGenres = genres?.map(el => el.name).join(', ');

  return (
    <>
      <Button location={location.state?.from} navigate={navigate} />

      {loading && <Loader />}
      {error && <h2>Oops, something went wrong...</h2>}
      <FilmInfo
        posterPath={poster_path}
        title={title}
        releaseDate={release_date}
        voteAverage={vote_average}
        overview={overview}
        filmGenres={filmGenres}
        poster={posterImg}
      />
      <AdditionalInfo />
    </>
  );
};

export default About;
