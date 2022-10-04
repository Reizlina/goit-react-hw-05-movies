import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getInfoReviews } from 'api/Api';
import s from './Reviews.module.css';

import Loader from 'components/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

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
      const data = await getInfoReviews(id);
      setReviews(data.results);
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const filmReviews = reviews.map(({ id, author, content }) => {
    return (
      <li key={id}>
        <p>Autor&#58; {author}</p>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <>
      {loading && <Loader />}
      {error && <h2>Oops, something went wrong...</h2>}
      {reviews.length ? (
        <ul>{filmReviews}</ul>
      ) : (
        <p className={s.text}>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
