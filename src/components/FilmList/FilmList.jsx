import PropTypes from 'prop-types';

import FilmItems from './FilmItems';

import s from './FilmList.module.css';

const FilmList = ({ movies }) => {
  const FilmNames = movies.map(({ title, id }) => {
    return <FilmItems key={id} title={title} id={id} />;
  });

  return <ul className={s.list}>{FilmNames}</ul>;
};

export default FilmList;

FilmList.propTypes = {
  movies: PropTypes.array.isRequired,
};
