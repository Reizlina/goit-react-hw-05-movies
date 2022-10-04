import { Link, useLocation } from 'react-router-dom';

const FilmItems = ({ name, title, id }) => {
  const navigate = useLocation();
  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: navigate.pathname }}>
        {title || name}
      </Link>
    </li>
  );
};

export default FilmItems;
