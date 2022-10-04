import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const FilmItems = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </Link>
    </li>
  );
};

export default FilmItems;

FilmItems.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
