import FilmItems from './FilmItems';

import s from './FilmList.module.css';

const FilmList = ({ movies }) => {
  const FilmNames = movies.map(({ title, name, id }) => {
    return <FilmItems key={id} title={title} name={name} id={id} />;
  });

  return <ul className={s.list}>{FilmNames}</ul>;
};

export default FilmList;
