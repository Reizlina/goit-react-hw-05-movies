import { Link, useLocation } from 'react-router-dom';

import PropTypes from 'prop-types';

const FilmItems = ({ title, id }) => {
  const navigate = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: navigate }}>
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
