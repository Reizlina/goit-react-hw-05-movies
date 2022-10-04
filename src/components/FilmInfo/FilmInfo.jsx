import PropTypes from 'prop-types';

import s from './FilmInfo.module.css';

const FilmInfo = ({
  posterPath,
  title,
  releaseDate,
  voteAverage,
  overview,
  filmGenres,
  poster,
}) => {
  return (
    <div className={s.wrap}>
      <img
        alt={title}
        src={
          posterPath
            ? poster
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'
        }
        width="250"
      />
      <div className={s.info}>
        <h2>
          {title} &#40;{releaseDate?.slice(0, 4)}&#41;
        </h2>
        <p>User score&#58; {Math.round((voteAverage / 10) * 100)}&#37;</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <p>{filmGenres}</p>
      </div>
    </div>
  );
};
export default FilmInfo;

FilmInfo.propTypes = {
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
  filmGenres: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
