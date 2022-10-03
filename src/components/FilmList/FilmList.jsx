import FilmItems from './FilmItems';

const FilmList = ({ movies }) => {
  const FilmNames = movies.map(({ title, name, id }) => {
    return <FilmItems key={id} title={title} name={name} id={id} />;
  });

  return <ul>{FilmNames}</ul>;
};

export default FilmList;
